const lista = [
  200,
  500,
  300,
  100,
  50000000,
];


function esPar(num){
  if(num % 2 === 0){
    return true;
  }
  return false;
}

function calcularMediana(lista){
  let mediana;
  var mitadLista = parseInt(lista.length / 2);

  //ordena la lista de menor a mallor
  //el metodo sor nos ayuda a ordenar un array deacuerdo al orden de los caracteres unicode
  //para que noslo ordene de menor a mayor tenemos que pasarle unfuncion indicandole esto
  lista.sort(function(a, b){
    return a - b;
  });

  if(esPar(lista.length)){
    mediana = (lista[mitadLista-1]+ lista[mitadLista])/2;
  }else{
    mediana = lista[mitadLista]
  }
  return mediana;
}


