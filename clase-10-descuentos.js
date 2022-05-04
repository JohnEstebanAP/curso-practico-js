
const coupons = [
  {
    name:"Luisa te Amo",
    discount: 100
  },
  {
    name:"pero_no_le_digas_a_nadie",
    discount: 50
  },
  {
    name:"es_un_secreto",
    discount: 25
  },
];


function onClickButtonPriceDiscount( ){
  //asemos referencia a una variable en javascrit de nuestros input creados en html mediante su id
  const inputPrice = document.getElementById("InputPrice");
  const inputCoupon = document.getElementById("InputCoupon");

  //le asignamos auna variables o constantes el precio digitado en los inputs
  const priceValue = inputPrice.value;
  const couponValue = inputCoupon.value;
  const resultP = document.getElementById("ResultP");

  //Calculo del descuento

  const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
  }

  const userCoupon = coupons.find(isCouponValueValid);

  if(!userCoupon){
    alert("El cupón "+ couponValue + "no es válido.")
  } else{

    const descuento = userCoupon.discount;

    const precioConDescuento = (priceValue * (100-descuento))/ 100

    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
  }

}
