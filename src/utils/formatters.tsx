<<<<<<< HEAD
export const formataPreco = (preco = 0) => {
=======
export const formataPreco = (preco: number) => {
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
<<<<<<< HEAD
=======

export const getPrecoTotal = (items: PratoDetalhado[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}
>>>>>>> afac7c3 (Finalizando projeto efood - parte 4)
