import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import cartReducer from '../store/reducers/cart'
=======
import cartReducer from './reducers/cart' // CORRIGIDO: mudamos de '../store/' para './'
import checkoutReducer from './reducers/checkout' // 1. IMPORTANTE: Adicionado o import do seu novo reducer
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
<<<<<<< HEAD
=======
    checkout: checkoutReducer, // 2. IMPORTANTE: Registrado o checkout na sua árvore de estados global
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
