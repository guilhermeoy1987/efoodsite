import RestaurantList from '../../RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'
import Hero from '../../Hero'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (!restaurantes) {
    return <h3>Carregando restaurantes...</h3>
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
