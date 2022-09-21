function troca(analise, lista){
  let listaAtual = lista[analise];
  let listaAnterior = lista[analise - 1];

  lista[analise] = listaAnterior
  lista[analise - 1] = listaAtual

}
module.exports = troca; 