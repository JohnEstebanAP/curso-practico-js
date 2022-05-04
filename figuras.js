//*********** Código del cuadarado **************
console.group("Cuadrados"); //nos permite agrupar los console.log en grupos
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

//perimetro
function perimetroCuadrado(ladoCuadrado){
 return  (ladoCuadrado * 4);
}
// console.log("El perimétro del cuadrado es de: "+ perimetroCuadrado +"cm²");

//Area
function areaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}
// console.log("El Area del cuadrado es de: "+ areaCuadrado);
console.groupEnd();

//*************** Código del riangulo ******************
console.group("Triagunlos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 +"cm, " + ladoTriangulo2 + "cm, " + baseTriangulo +"cm " );

//perimetro
function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
  return (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
}
// console.log("El perimétro del triangulo es de: "+ perimetroTriangulo +"cm²");

//Area
// const alturaTriangulo = 5.5;

function areaTriangulo(baseTriangulo, alturaTriangulo){
  return (baseTriangulo * alturaTriangulo) / 2;
}
// console.log("El Area del triangulo es de: "+ areaTriangulo);
console.groupEnd();


//****************** Código del Circulo  *****************
console.group("Circulos");
//radio
// const radioCirculo = 4;
//Diámetro
function diametroCirculo (radioCirculo){
 return radioCirculo * 2;
}
//pi
const PI = Math.PI;
//Circunferencia
// console.log("el radio del circulo es de: " + radioCirculo +"cm, el diametro del circulo es de: " + diametroCirculo + "cm, ");

//perimetro
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio)
  return diametro * PI;
}
// console.log("El perimétro del ciruclo es de: "+ perimetroCirculo +"cm²");

//Area
function areaCirculo (radioCirculo){
  return (radioCirculo * radioCirculo) * PI;
}
// console.log("El Area del circulo es de: "+ areaCirculo);
console.groupEnd();

//Triangulo isoseles
function alturaTrianguloIsoseles(lado1,lado2,base){
  var esIsoseles= false;

  if(lado1 === lado2){
    esIsoseles = true;
    return  Math.sqrt(Altura(lado1,base));
  }

  return 0;
}

function Altura(a,b){
  return ((a**2) - (b**2/4));
}
