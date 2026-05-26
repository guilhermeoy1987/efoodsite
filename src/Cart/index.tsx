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

  return (
    // RETORNADO PARA DINÂMICO: Só ganha a classe 'is-open' se o Redux disser que está aberto
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {/* A div close-button e o botão agora conseguem fechar o carrinho disparando o closeCart */}
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
