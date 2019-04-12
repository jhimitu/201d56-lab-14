/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  console.log(localStorage.getItem('cart'));
  var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  var loadCart = [];

  for(let i = 0; i < cartItems.length; i++){
    loadCart.push(new CartItem(cartItems[i].product,cartItems[i].quantity));
  }

  cart = new Cart(loadCart);
  console.log(cart);
  console.table(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.getElementById('cart').getElementsByTagName('tbody')[0];
  tbody.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbody = document.getElementById('cart').getElementsByTagName('tbody')[0];
  console.log(tbody);

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  console.log('cart items length: ' + cart.items.length);

  for(let i = 0; i < cart.items.length; i++){

    var trEl = document.createElement('tr');

    var tdRem = document.createElement('td');
    var buttonRemove = document.createElement('button');
    buttonRemove.id = i;
    buttonRemove.textContent = 'X';
    tdRem.appendChild(buttonRemove);
    console.log(buttonRemove);
    // tdRem.textContent = cart.items[i].quantity;

    var tdElQuant = document.createElement('td');
    tdElQuant.textContent = cart.items[i].quantity;
    console.log(cart.items[i].quantity);

    var tdElItem = document.createElement('td');
    tdElItem.textContent = cart.items[i].product;
    console.log(cart.items[i].product);

    trEl.appendChild(tdRem);
    trEl.appendChild(tdElQuant);
    trEl.appendChild(tdElItem);
    tbody.appendChild(trEl);//append row to body

  }
  console.log(tbody);

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  console.log('click remove target: ' + event.target.id);//if an 'X' button is hit - it will give index to remove in cart

  cart.removeItem(event.target.id);
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
table.addEventListener('click',removeItemFromCart);
