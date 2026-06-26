<<<<<<< HEAD
import Header from '../../Hero'
import RestaurantList from '../../RestaurantList'
import { Restaurante } from '../../Models/Restaurant'

// Importação das imagens de capa
import sushiImg from '../../assets/images/sushi.png'
import italianaImg from '../../assets/images/massas.png'
import hamburguerImg from '../../assets/images/hamburgueria.jpeg'
import vegetarianaImg from '../../assets/images/vegetariana.jpeg'
import churrascariaImg from '../../assets/images/churrascaria.jpeg'
import mexicanaImg from '../../assets/images/comidamexicana.jpeg'

// Imports do Restaurante japones
import combinadosushiImg from '../../assets/images/combinadosushi.jpeg'
import temakiImg from '../../assets/images/temaki.jpeg'
// Imports das pizzas
import pizza1Img from '../../assets/images/pizza1.jpeg'
import carbonaraImg from '../../assets/images/carbonara.jpeg'
import pizzaFrangoImg from '../../assets/images/pizza2.jpeg'
import pizzaCalabresaImg from '../../assets/images/pizzacalabresa.jpeg'
import pizzaPortuguesaImg from '../../assets/images/pizzaportuguesa.jpeg'
import pizza4QueijosImg from '../../assets/images/pizza4queijo.jpg'
// Imports dos Hambúrgueres
import baconBlastImg from '../../assets/images/baconblast.jpeg'
import burgerKingExtraImg from '../../assets/images/burguerkingextra.jpg'
import cheeseburguerImg from '../../assets/images/cheeseburguerbrioche.jpeg'
import classicKingImg from '../../assets/images/classicking.jpeg'
import doubleCheddarImg from '../../assets/images/doublecheddar.jpeg'
import crispyChickenImg from '../../assets/images/crispychicken.jpeg'
//imports de restaurante vegetariano
import moquecaImg from '../../assets/images/moquecadebanana.jpeg'
import risotoImg from '../../assets/images/risootodecogumelo.jpg'
import nhoqueImg from '../../assets/images/nhoquedebatatadoce.jpg'
import falafelImg from '../../assets/images/falafel.jpeg'

//imports de churrascaria
import picanhaImg from '../../assets/images/executivopicanha.jpg'
import costelaImg from '../../assets/images/costelapremium.jpg'
import cupimImg from '../../assets/images/cupim.jpeg'
import maminhaImg from '../../assets/images/maminhaalho.jpeg'
import espetoImg from '../../assets/images/espetomisto.jpg'

//imports de comida mexicana
import trioTacosImg from '../../assets/images/triodetacos.jpeg'
import tacosPastorImg from '../../assets/images/tacosalpastor.jpg'
import burritoSupremoImg from '../../assets/images/burritosupremo.jpeg'
import enchiladasRojasImg from '../../assets/images/enchiladasrojas.jpeg'
import quesadillaQueijoImg from '../../assets/images/quesadilhadequeijo.jpeg'

// A constante exportada servirá como nosso "banco de dados" fixo (hard coded)
export const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Sushi House',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.8,
    descricao:
      'O melhor sushi da cidade com ingredientes frescos e chefs experientes.',
    capa: sushiImg,
    cardapio: [
      {
        id: 101,
        nome: 'Combinado Premium',
        descricao:
          '20 peças variadas com salmão fresco, atum e ingredientes selecionados do dia.',
        foto: combinadosushiImg,
        porcao: 'Serve até 2 pessoas',
        preco: 95.0
      },
      {
        id: 102,
        nome: 'Temaki Especial',
        descricao:
          'Cone de alga crocante recheado com arroz, salmão em cubos e cream cheese.',
        foto: temakiImg,
        porcao: '1 unidade',
        preco: 32.0
      }
    ]
  },
  {
    id: 2,
    titulo: 'Pizzaria Napoli',
    destacado: false,
    tipo: 'Italiana',
    avaliacao: 4.5,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!',
    capa: pizza1Img,
    cardapio: [
      {
        id: 103,
        nome: 'Pizza Margherita',
        descricao:
          'Molho de tomate fresco, mozzarella de búfala, manjericão e azeite extra virgem.',
        foto: pizza1Img,
        porcao: '8 fatias',
        preco: 58.0
      },
      {
        id: 104,
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'Massa spaghetti al dente com molho cremoso de ovos, queijo pecorino romano, pancetta crocante e pimenta-do-reino.',
        foto: carbonaraImg,
        porcao: 'Serve 1 pessoa',
        preco: 45.0
      },
      {
        id: 105,
        nome: 'Frango com Catupiry',
        descricao:
          'Peito de frango desfiado e temperado, coberto com o autêntico Catupiry cremoso sobre molho de tomate fresco.',
        foto: pizzaFrangoImg, // Referência à variável importada acima
        porcao: '8 fatias',
        preco: 62.0
      },
      {
        id: 106,
        nome: 'Calabresa Tradicional',
        descricao:
          'Fatias de calabresa premium acompanhadas de cebola fresca e azeitonas pretas sobre uma camada de mozzarella e molho de tomate.',
        foto: pizzaCalabresaImg,
        porcao: '8 fatias',
        preco: 56.0
      },
      {
        id: 107,
        nome: 'Portuguesa Clássica',
        descricao:
          'O equilíbrio perfeito entre presunto cozido, ovos selecionados, cebola, ervilhas e azeitonas, tudo sobre uma base generosa de mozzarella.',
        foto: pizzaPortuguesaImg,
        porcao: '8 fatias',
        preco: 58.0
      },
      {
        id: 108,
        nome: '4 Queijos Especial',
        descricao:
          'Uma combinação irresistível de mozzarella, provolone, parmesão e o toque marcante do queijo gorgonzola sobre molho de tomate fresco.',
        foto: pizza4QueijosImg,
        porcao: '8 fatias',
        preco: 64.0
      }
    ]
  },
  {
    id: 3,
    titulo: 'Lanchonete King Express',
    destacado: false,
    tipo: 'Hamburgueria',
    avaliacao: 4.7,
    descricao:
      'Hambúrgueres suculentos com carnes nobres e combinações criativas.',
    capa: hamburguerImg,
    cardapio: [
      {
        id: 109,
        nome: 'King Burger Extra',
        descricao:
          'Blend de 200g, cheddar duplo, bacon crocante e molho especial da casa.',
        foto: burgerKingExtraImg,
        porcao: 'Individual',
        preco: 42.0
      },
      {
        id: 110,
        nome: 'Bacon Blast',
        descricao:
          'Muito bacon crocante, blend bovino, queijo derretido e molho barbecue.',
        foto: baconBlastImg,
        porcao: 'Individual',
        preco: 38.0
      },
      {
        id: 111,
        nome: 'Classic King',
        descricao:
          'O clássico indispensável: hambúrguer 180g, queijo, alface e tomate fresco.',
        foto: classicKingImg,
        porcao: 'Individual',
        preco: 32.0
      },
      {
        id: 112,
        nome: 'Double Cheddar',
        descricao:
          'Para quem tem fome de verdade: dois blends e muito cheddar cremoso.',
        foto: doubleCheddarImg,
        porcao: 'Individual',
        preco: 45.0
      },
      {
        id: 113,
        nome: 'Crispy Chicken',
        descricao:
          'Frango empanado crocante, maionese artesanal e alface americana.',
        foto: crispyChickenImg,
        porcao: 'Individual',
        preco: 29.0
      },
      {
        id: 114,
        nome: 'Cheese Brioche',
        descricao:
          'Hambúrguer gourmet servido no pão de brioche amanteigado com queijo especial.',
        foto: cheeseburguerImg,
        porcao: 'Individual',
        preco: 35.0
      }
    ]
  },
  {
    id: 4,
    titulo: 'Veggie Delight',
    destacado: false,
    tipo: 'Vegetariana',
    avaliacao: 4.6,
    descricao:
      'Comidas saudáveis e saborosas com opções veganas e vegetarianas.',
    capa: vegetarianaImg,
    cardapio: [
      {
        id: 115,
        nome: 'Moqueca de Banana',
        descricao:
          'Tradicional moqueca baiana em versão vegana e com banana-da-terra leite de coco artesanal e azeite de dendê e coentro fresco.',
        foto: moquecaImg,
        porcao: 'Serve 1 pessoa',
        preco: 48.0
      },
      {
        id: 116,
        nome: 'Risoto de Cogumelos',
        descricao:
          'Arroz arbóreo preparado com caldo de legumes natural, mix de cogumelos (shimeji e paris) e finalizado com azeite de trufas.',
        foto: risotoImg,
        porcao: 'Individual',
        preco: 52.0
      },
      {
        id: 117,
        nome: 'Nhoque de Batata Doce',
        descricao:
          'Massa artesanal de batata doce roxa ao molho pesto de manjericão e castanhas-do-pará salpicado com sementes de girassol.',
        foto: nhoqueImg,
        porcao: 'Individual',
        preco: 44.0
      },
      {
        id: 118,
        nome: 'Falafel Especial',
        descricao:
          'Bolinhos de grão-de-bico crocantes acompanhados de homus clássico salada fatuche e pão pita integral feito na hora.',
        foto: falafelImg,
        porcao: 'Individual',
        preco: 39.0
      }
    ]
  },
  {
    id: 5,
    titulo: 'Churrascaria Gaúcha',
    destacado: false,
    tipo: 'Brasileira',
    avaliacao: 4.9,
    descricao:
      'Carnes nobres assadas no fogo de chão com atendimento tradicional.',
    capa: churrascariaImg,
    cardapio: [
      {
        id: 119,
        nome: 'Espeto Misto',
        descricao:
          'Seleção de picanha, alcatra e lombo suíno acompanhados de farofa.',
        foto: espetoImg,
        porcao: 'Serve 2 pessoas',
        preco: 89.9
      },
      {
        id: 120,
        nome: 'Executivo de Picanha',
        descricao:
          'Corte nobre de picanha grelhada na brasa, servido com arroz branco, feijão tropeiro, farofa de ovos e batatas rústicas.',
        foto: picanhaImg, // Substitua pela variável da foto de carne se preferir
        porcao: 'Individual',
        preco: 59.9
      },
      {
        id: 121,
        nome: 'Costela Premium',
        descricao:
          'Costela bovina assada lentamente por 12 horas, acompanhada de mandioca cozida na manteiga de garrafa e arroz carreteiro.',
        foto: costelaImg,
        porcao: 'Individual',
        preco: 54.0
      },
      {
        id: 122,
        nome: 'Cupim Casqueirado',
        descricao:
          'Fatias finas de cupim macio e suculento, servidas com vinagrete especial da casa, arroz branco e farofa crocante.',
        foto: cupimImg,
        porcao: 'Individual',
        preco: 48.0
      },
      {
        id: 123,
        nome: 'Maminha ao Alho',
        descricao:
          'Maminha grelhada com crosta de alho assado, acompanhada de polenta frita, arroz e feijão fresquinho.',
        foto: maminhaImg,
        porcao: 'Individual',
        preco: 45.9
      }
    ]
  },
  {
    id: 6,
    titulo: 'Taco Loco',
    destacado: false,
    tipo: 'Mexicana',
    avaliacao: 4.4,
    descricao:
      'Autêntica comida mexicana com sabores picantes e ingredientes frescos.',
    capa: mexicanaImg,
    cardapio: [
      {
        id: 124,
        nome: 'Trio de Tacos',
        descricao:
          'Três tacos variados (carne, frango e porco) com guacamole e sour cream.',
        foto: trioTacosImg,
        porcao: 'Individual',
        preco: 38.0
      },
      {
        id: 125,
        nome: 'Tacos Al Pastor',
        descricao:
          'Três tortilhas de milho macias recheadas com carne de porco marinada em especiarias, abacaxi grelhado, cebola e coentro fresco.',
        porcao: '3 unidades',
        foto: tacosPastorImg,
        preco: 42.0
      },
      {
        id: 126,
        nome: 'Burrito Supremo',
        descricao:
          'Grande tortilha de trigo recheada com carne moída temperada, arroz mexicano, feijões refritos, queijo derretido e guacamole.',
        porcao: 'Individual',
        foto: burritoSupremoImg,
        preco: 48.5
      },
      {
        id: 127,
        nome: 'Enchiladas Rojas',
        descricao:
          'Tortilhas de milho enroladas e recheadas com frango desfiado, cobertas com molho vermelho picante, queijo gratinado e creme azedo.',
        porcao: '2 unidades',
        foto: enchiladasRojasImg,
        preco: 45.0
      },
      {
        id: 128,
        nome: 'Quesadilla de Queijo',
        descricao:
          'Tortilha de trigo tostada na chapa com mix de queijos mexicanos, servida com pico de gallo e sour cream lateral.',
        porcao: 'Individual',
        foto: quesadillaQueijoImg,
        preco: 38.0
      }
    ]
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurantes} />
  </>
)
=======
import RestaurantList from '../../Components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'
import Hero from '../../Components/Hero'

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
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)

export default Home
