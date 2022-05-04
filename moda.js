var list = [1,2,3,1,2,3,4,2,2,2,1];


function encontrarModa(list){

  const lista1Count = {};

  //el metdo map nos ayuda a recorrer nuestro array
  //y guardar nuetros valores como objetos
  list.map(
    function(elemento){
      if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
      }else{
        lista1Count[elemento] = 1;
      }
    }
  );

  //con object.entries() pasamo de objetos a arrays
  const list1Array= Object.entries(lista1Count);

  //con el metodo sort iteraremos
  //cada uno de los elementos para encontrar el mayor
  var listaOrdenada = list1Array.sort(function(valorAcumulado,nuevoValor){
    return valorAcumulado[1] - nuevoValor[1]
  });

  //encontramos el nomero mas grande en la lista ordenada en su ultima posicion
  //ejemplo [1,2,3,4,5] el numeo mas grande list[4]=> 5
  const moda = listaOrdenada[listaOrdenada.length -1];
  return moda;
}
