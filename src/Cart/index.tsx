import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'

import { close, remove } from '../store/reducers/cart'
import Button from '../Button'
import { formataPreco } from '../utils/formatters'
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

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }

  // CORREÇÃO ESSENCIAL: Se o carrinho não estiver aberto, o React não renderiza absolutamente nada no HTML.
  // Isso impede que a estrutura interfira no visual da página Home ou de listagem.
  if (!isOpen) {
    return null
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <div className="close-button">
          <CartCloseButton onClick={closeCart} type="button" />
        </div>

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

        <Button
          type="button"
          title="Clique para continuar com a entrega"
          variant="secondary"
        >
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
