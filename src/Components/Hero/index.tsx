import { HeroContainer, Imagem } from './styles'
// Altere para subir dois níveis (../../):
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Hero = () => (
  <Imagem>
    <HeroContainer>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </HeroContainer>
  </Imagem>
)

export default Hero
