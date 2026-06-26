import { useParams } from 'react-router-dom'
<<<<<<< HEAD
import Banner from '../../Banner'
import HeaderPerfil from '../../HeaderPerfil'
import ProductList from '../../ProductList'

// 1. IMPORTANTE: Mude o import para buscar da Home em vez do JSON
import { restaurantes } from '../Home'
=======
import Banner from '../../Components/Banner'
import HeaderPerfil from '../../Components/HeaderPerfil'
import ProductList from '../../Components/ProductList'
import { useGetPratosQuery } from '../../services/api'
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)

const Perfil = () => {
  const { id } = useParams()

<<<<<<< HEAD
  // 2. Agora usamos a lista 'restaurantes' que veio da Home
  // O TypeScript já vai reconhecer o 'r' porque a lista na Home está tipada
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  // 3. Verificação de segurança
  if (!restaurante) {
    return <h3>Restaurante não encontrado</h3>
  }
=======
  const { data: restaurante } = useGetPratosQuery(id || '')

  if (!restaurante) return <h3>Carregando...</h3>
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)

  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={restaurante.capa}
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <ProductList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
