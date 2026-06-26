import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

// Redux e API
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'
import { open, clear } from '../../store/reducers/cart'

// Componentes
import Button from '../Button'

// Utilitários
import { formataPreco, getPrecoTotal } from '../../utils/formatters'

// Estilos
import * as S from './styles'

const Checkout = () => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [etapaAtual, setEtapaAtual] = useState<
    'entrega' | 'pagamento' | 'finalizado'
  >('entrega')

  const form = useFormik({
    initialValues: {
      destinatario: '',
      endereco: '',
      cidade: '',
      cep: '',
      numeroDaCasa: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      destinatario: Yup.string()
        .matches(
          /^[A-Za-zÀ-ÿ\s]+$/,
          'O nome deve conter apenas letras e espaços'
        )
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .matches(/^\d{5}-?\d{3}$/, 'CEP inválido')
        .required('O campo é obrigatório'),
      numeroDaCasa: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string().notRequired(),
      nomeCartao: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      numeroCartao: Yup.string()
        .transform((value: string) =>
          value ? value.replace(/\s/g, '') : value
        )
        .matches(/^\d+$/, 'Digite apenas números')
        .min(13, 'Mínimo 13 números')
        .max(19, 'Maximum 19 números')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .matches(/^\d+$/, 'Digite apenas números')
        .min(3, 'Mínimo 3 números')
        .max(4, 'Máximo 4 números')
        .required('O campo é obrigatório'),
      mesVencimento: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês inválido')
        .required('O campo é obrigatório'),
      anoVencimento: Yup.string()
        .matches(/^\d{2}$/, 'Ano inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.destinatario,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numeroDaCasa),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao.replace(/\s/g, ''),
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputTemErro = (fieldName: string) => {
    return fieldName in form.touched && fieldName in form.errors
  }

  const closeCheckout = () => {
    dispatch(close())
    setEtapaAtual('entrega')
  }

  const openCart = () => {
    dispatch(close())
    dispatch(open())
  }
  const enviarEntregaEIrParaPagamento = async () => {
    // Disparamos a validação do formulário inteiro
    const erros = await form.validateForm()

    // Lista dos campos que queremos checar
    const camposEntrega = [
      'destinatario',
      'endereco',
      'cidade',
      'cep',
      'numeroDaCasa'
    ]

    // Verificamos se algum desses campos possui erro no objeto 'erros'
    const temErros = camposEntrega.some(
      (campo) => !!erros[campo as keyof typeof form.values]
    )

    if (!temErros) {
      // Se não há erros nos campos obrigatórios, avançamos
      setEtapaAtual('pagamento')
    } else {
      // Se há erros, marcamos todos como 'touched' para exibir as mensagens de erro na tela
      const touchedFields = camposEntrega.reduce((acc, campo) => {
        acc[campo as keyof typeof form.values] = true
        return acc
      }, {} as any)

      form.setTouched(touchedFields)
    }
  }

  const enviarPagamentoEFinalizar = async () => {
    const erros = await form.validateForm()
    const camposPagamento = [
      'nomeCartao',
      'numeroCartao',
      'cvv',
      'mesVencimento',
      'anoVencimento'
    ]
    const errosPagamento = camposPagamento.filter(
      (campo) => (erros as any)[campo]
    )

    if (errosPagamento.length === 0) {
      form.handleSubmit()
    } else {
      const touchedFields: Record<string, boolean> = {}
      camposPagamento.forEach((campo) => {
        touchedFields[campo] = true
      })
      form.setTouched(touchedFields)
    }
  }

  useEffect(() => {
    if (isSuccess && data) {
      setEtapaAtual('finalizado')
      dispatch(clear())
    }
  }, [isSuccess, data, dispatch])

  if (!isOpen) return null

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCheckout} />
      <S.Aside className="SideBar">
        {etapaAtual === 'entrega' && (
          <>
            <h3>Entrega</h3>
            <S.FormContainer>
              <label htmlFor="destinatario">Quem irá receber</label>
              <S.Input
                id="destinatario"
                name="destinatario"
                type="text"
                value={form.values.destinatario}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputTemErro('destinatario') ? 'erro' : ''}
              />

              <label htmlFor="endereco">Endereço</label>
              <S.Input
                id="endereco"
                name="endereco"
                type="text"
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputTemErro('endereco') ? 'erro' : ''}
              />

              <label htmlFor="cidade">Cidade</label>
              <S.Input
                id="cidade"
                name="cidade"
                type="text"
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputTemErro('cidade') ? 'erro' : ''}
              />

              <S.Row>
                <div>
                  <label htmlFor="cep">CEP</label>
                  <S.Input
                    as={InputMask}
                    maxWidth="155px"
                    id="cep"
                    name="cep"
                    type="text"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('cep') ? 'erro' : ''}
                    mask="99999-999"
                  />
                </div>
                <div>
                  <label htmlFor="numeroDaCasa">Número</label>
                  <S.Input
                    maxWidth="155px"
                    id="numeroDaCasa"
                    name="numeroDaCasa"
                    type="text"
                    value={form.values.numeroDaCasa}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('numeroDaCasa') ? 'erro' : ''}
                  />
                </div>
              </S.Row>

              <label htmlFor="complemento">Complemento (opcional)</label>
              <S.Input
                id="complemento"
                name="complemento"
                type="text"
                value={form.values.complemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormContainer>

            <S.ContainerButton style={{ marginTop: 'auto' }}>
              <Button
                onClick={enviarEntregaEIrParaPagamento}
                type="button"
                title="Continuar com o pagamento"
              >
                Continuar com o pagamento
              </Button>
              <Button
                onClick={openCart}
                type="button"
                title="Voltar para o carrinho"
              >
                Voltar para o carrinho
              </Button>
            </S.ContainerButton>
          </>
        )}

        {etapaAtual === 'pagamento' && (
          <>
            <h3>
              Pagamento - Valor a pagar R$ {formataPreco(getPrecoTotal(items))}
            </h3>
            <S.FormContainer>
              <label htmlFor="nomeCartao">Nome no cartão</label>
              <S.Input
                id="nomeCartao"
                name="nomeCartao"
                type="text"
                value={form.values.nomeCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputTemErro('nomeCartao') ? 'erro' : ''}
              />

              <S.Row>
                <div>
                  <label htmlFor="numeroCartao">Número do cartão</label>
                  <S.Input
                    as={InputMask}
                    maxWidth="228px"
                    id="numeroCartao"
                    name="numeroCartao"
                    type="text"
                    value={form.values.numeroCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('numeroCartao') ? 'erro' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <S.Input
                    as={InputMask}
                    maxWidth="87px"
                    id="cvv"
                    name="cvv"
                    type="text"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('cvv') ? 'erro' : ''}
                    mask="999"
                  />
                </div>
              </S.Row>

              <S.Row>
                <div>
                  <label htmlFor="mesVencimento">Mês de vencimento</label>
                  <S.Input
                    as={InputMask}
                    id="mesVencimento"
                    name="mesVencimento"
                    type="text"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('mesVencimento') ? 'erro' : ''}
                    mask="99"
                  />
                </div>
                <div>
                  <label htmlFor="anoVencimento">Ano de vencimento</label>
                  <S.Input
                    as={InputMask}
                    id="anoVencimento"
                    name="anoVencimento"
                    type="text"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputTemErro('anoVencimento') ? 'erro' : ''}
                    mask="99"
                  />
                </div>
              </S.Row>
            </S.FormContainer>

            <S.ContainerButton>
              <Button
                onClick={enviarPagamentoEFinalizar}
                type="button"
                title="Finalizar pagamento"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <Button
                onClick={() => setEtapaAtual('entrega')}
                type="button"
                title="Voltar para a edição de endereço"
              >
                Voltar para a edição de endereço
              </Button>
            </S.ContainerButton>
          </>
        )}

        {etapaAtual === 'finalizado' && data && (
          <>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p
              style={{
                marginBottom: '16px',
                lineHeight: '22px',
                fontSize: '14px'
              }}
            >
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p
              style={{
                marginBottom: '16px',
                lineHeight: '22px',
                fontSize: '14px'
              }}
            >
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p
              style={{
                marginBottom: '16px',
                lineHeight: '22px',
                fontSize: '14px'
              }}
            >
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p
              style={{
                marginBottom: '24px',
                lineHeight: '22px',
                fontSize: '14px'
              }}
            >
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button
              title="Concluir e voltar para a home"
              type="button"
              onClick={closeCheckout}
            >
              Concluir
            </Button>
          </>
        )}
      </S.Aside>
    </S.CartContainer>
  )
}

export default Checkout
