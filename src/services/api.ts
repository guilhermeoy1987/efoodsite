import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../Models/Restaurant'

<<<<<<< HEAD
=======
// Tipagem do formato que a API do eFood espera receber no checkout
type PurchasePayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

// Tipagem da resposta de sucesso da API
type PurchaseResponse = {
  orderId: string
}

>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
<<<<<<< HEAD
=======
    }),
    // 1. ADICIONADO: Mutation para salvar o pedido e enviar o formulário
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
    })
  })
})

<<<<<<< HEAD
export const { useGetRestaurantsQuery, useGetPratosQuery } = api
=======
// 2. EXPORTADO: O hook usePurchaseMutation gerado automaticamente pelo Redux Toolkit
export const {
  useGetRestaurantsQuery,
  useGetPratosQuery,
  usePurchaseMutation
} = api
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
export default api
