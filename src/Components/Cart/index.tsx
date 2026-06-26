import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

// 1. Importamos o 'open' do checkout para o botão funcionar
import { open as openCheckout } from '../../store/reducers/checkout'
import { close as closeCart, remove } from '../../store/reducers/cart'
import Button from '../Button'

import { formataPreco } from '../../utils/formatters'
import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  Price,
  CartCloseButton
} from './styles'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  // Função que fecha o carrinho e abre a barra lateral de checkout
  const handleOpenCheckout = () => {
    dispatch(closeCart())
    dispatch(openCheckout())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  // DICA: Se você usa animação CSS com a classe 'is-open', comente ou remova o 'return null'
  // para que o efeito de "slide" ou fadeout funcione ao fechar.
  if (!isOpen) {
    return null
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleCloseCart} />
      <SideBar>
        <div className="close-button">
          <CartCloseButton onClick={handleCloseCart} type="button" />
        </div>

        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />

                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                    title="Remover item do carrinho"
                  ></button>
                </CartItem>
              ))}
            </ul>

            <Price>
              <p>Valor total</p>
              <p>{formataPreco(getValorTotal())}</p>
            </Price>

            {/* CORREÇÃO AQUI: Adicionado o onClick para disparar a troca de telas */}
            <Button
              type="button"
              title="Clique para continuar com a entrega"
              variant="secondary"
              onClick={handleOpenCheckout}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p
            className="msg-erro"
            style={{ color: '#fff', textAlign: 'center' }}
          >
            O carrinho está vazio. Adicione pelo menos um prato para continuar.
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
