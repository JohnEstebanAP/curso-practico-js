//Arrays
const colombia = [];

colombia.push({
  name: "Camila",
  salary: 500,
});

colombia.push({
  name: "Nath",
  salary: 1500,
});

colombia.push({
  name: "luisa",
  salary: 1017,
});

colombia.push({
  name: "Laura",
  salary: 1000,
});

colombia.push({
  name: "Daniela",
  salary: 24000,
});

colombia.push({
  name: "Fernanda",
  salary: 10800,
});

//Funciones Helpers
function esPar(num){
  return (num%2 ===0);
}

function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce( (valorAcumuldado = 0, nuevoElemento) => {
      return valorAcumuldado + nuevoElemento;
});

  //retornamos el promedio
  return (sumaLista / lista.length);
}

//Calculadora de mediana

//funcion para calcular la mediana
function medianaSalarios(lista){
  //encuntro la mita de la lista
  const mitad = parseInt(lista.length / 2) ;

  if(esPar(lista.length)){
     return calcularMediaAritmetica([lista[mitad-1],lista[mitad]]);
  }else{
    return lista[mitad];
  }
  return true;
}

//**************Mediana General*******************
//lista de Arrays con el esalario en colombia
const salariosCol = colombia.map(

  function(persona){
    return persona.salary;
  }
);

//Se ordena los salarios de menor a mallor
const salariosColSorted = salariosCol.sort(
  function(salaryA, salaryB){
    return salaryA- salaryB;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
//El metodho splice nos ayuda entregandonos un rango de elementos del array
//[1,2,3,4,||5,6||7,8,9,10] => 5,6
const spliceStart = parseInt((salariosColSorted.length * 90)/100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
  medianaGeneralCol,
  medianaTop10Col,
)


