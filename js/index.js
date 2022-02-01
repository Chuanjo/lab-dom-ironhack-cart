// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const subTotalPrice = product.querySelector(".subtotal span")
  


  // console.log(price)

  const priceNumber = price.innerHTML;
  const quantityNumber = quantity.value;
  // console.log(priceNumber)
  
  let totalPrice = (Number(priceNumber) * Number(quantityNumber))
  console.log(totalPrice)

  subTotalPrice.innerText = Number(totalPrice)

  return totalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let sumaProductos = 0

  let allProducts = document.querySelectorAll(".product")
  allProducts.forEach(eachProduct => {
    sumaProductos += updateSubtotal(eachProduct)
  
  const totalButton = document.querySelector("#total-value span")
  
  
  
  });

console.log(sumaProductos)




  // ITERATION 3
  //... your code goes here
  const totalButton = document.querySelector("#total-value span")
  
  totalButton.innerText = Number(sumaProductos)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
