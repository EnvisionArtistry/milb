// JavaScript Document
$(document).ready(function(){
	function increaseValue() {
  
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
  // document.getElementById('price').innerText = value * price;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
  // document.getElementById('price').innerText =Math.floor(document.getElementById('price').innerText / value); 
}

function addToCart(){
var currentQuant = parseInt(document.getElementById('number').value,10);
var itemPrice = parseInt(document.getElementById('shirt-size').value,10);
  // console.log(currentQuant * itemPrice);
  
  var calcTotal = currentQuant * itemPrice;
  
  document.getElementById('price').innerText = calcTotal;
}

$('#addToCart').click(addToCart);
}