import { createSlice, PayloadAction } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { Prato } from '../../ProductList'
=======
// Mude de '../../ProductList' para '../../../Components/ProductList'
import { Prato } from '../../Components/ProductList'
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)

type PratoState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: PratoState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)
      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato ja foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
<<<<<<< HEAD
=======
    },
    // ADICIONE ESTA ACTION AQUI:
    clear: (state) => {
      state.items = []
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
    }
  }
})

<<<<<<< HEAD
export const { add, remove, open, close } = cartSlice.actions
=======
// Não esqueça de exportar o 'clear' aqui embaixo também!
export const { add, remove, open, close, clear } = cartSlice.actions
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
export default cartSlice.reducer
