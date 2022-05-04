const lista1 = [
  100,
  200,
  300,
  500,
]

//calcular la media aritmetica de lista1
function calcularMediaAritmetica(lista){
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  //Metodo reduce: para sumar los elementos de una lista
  //este metodo recorre todo la lista
  const sumaLista = lista.reduce(
    (valorAcumuldado = 0, nuevoElemento) => {
      console.log("nuevoElemento"+ nuevoElemento)
      console.log("valorAcumulado"+ valorAcumuldado)
    return valorAcumuldado + nuevoElemento;
  }
  );

  //retornamos el promedio
  return (sumaLista / lista.length);
}

console.log(calcularMediaAritmetica(lista1))
