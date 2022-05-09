// New component
class ShopComponent extends HTMLElement {
	constructor() {
		super();

		this.innerHTML = /*html*/`
		<style>
        :root {
          --color-white: white;
          --color-gray-light: #d1d1d1;
          --color-black: #222;
          --color-primary: #3184d1;
          --color-primary-light: #a9d0f5;
          --color-danger: #e90000;
          --color-danger-light: #f5b5b5;
          --min-width: 360px;
          --max-width: 1200px;
          --base-font-family: Arial, Helvetica, sans-serif;
          --fancy-font-family: 'Lobster', serif;
          --base-padding: 5px;
          font-size: 12px;
        }
        
        @media screen and (min-width: 600px) {
          :root {
            --base-padding: 12px;
            font-size: 14px;
          }
        }
        
        @media screen and (min-width: 1000px) {
          :root {
            --base-padding: 20px;
            font-size: 16px;
          }
        }
        
        body {
          margin: 0;
          min-width: var(--min-width);
          color: var(--color-black);
          font-family: var(--base-font-family);
        }
        
        /* ----------------- Layout ----------------- */
        
        .main-container {
          max-width: var(--max-width);
          display: grid;
          grid-gap: var(--base-padding);
          grid-template-columns: 1fr 3fr;
          margin: 0 auto;
          padding: 0 var(--base-padding);
        }
        
        @media screen and (min-width: 600px) {
          .main-container {
            grid-template-columns: 5fr 6fr
          }
        }
        
        @media screen and (min-width: 1000px) {
          .main-container {
            grid-template-columns: 5fr 3fr
          }
        }
        
        .section {
          display: flex;
          flex-direction: column;
          max-height: 100vh;
		  background: skyblue;
        }
        
        /* ----------------- Typography ----------------- */
        
        h1,
        h2,
        h3 {
          font-family: var(--fancy-font-family);
          font-weight: 400;
          margin: 1rem auto;
        }
        
        .text-center {
          text-align: center;
          color: blue;
        }
        
        /* ----------------- Buttons ----------------- */
        
        button {
			width: 5px
          font-family: var(--base-font-family);
          cursor: pointer;
          font-size: .95rem;
          border: none;
        }
        
        :disabled {
          opacity: .5;
          cursor: not-allowed;
        }
        
        .btn {
          padding: .6rem 0.4rem;
          transition: .3s all;
        }
        
        .btn--small {
          padding: .2rem .4rem;
        }
        
        .btn--primary {
          color: var(--color-white);
          background: var(--color-primary);
        }
        
        .btn--primary:hover:not(:disabled),
        .btn--primary:focus {
          outline: none;
          box-shadow: 0 0 0 5px var(--color-primary-light);
        }
        
        .btn--danger {
          color: var(--color-white);
          background: var(--color-danger);
        }
        
        .btn--danger:hover:not(:disabled),
        .btn--danger:focus {
          outline: none;
          box-shadow: 0 0 0 5px var(--color-danger-light);
        }
        
        /* ----------------- Products ----------------- */
        
        .products {
          display: grid;
          grid-gap: var(--base-padding);
          overflow: auto;
        }
        
		@media screen and (min-width: 280px) {
			.products {
			  grid-template-columns: repeat(1, 1fr);
			}
		  }

        @media screen and (min-width: 600px) {
          .products {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media screen and (min-width: 1000px) {
          .products {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .product {
          display: grid;
          grid-template-rows: repeat(1, min-content);
          grid-template-columns: repeat(2, 2fr);
          align-content: space-between;
          text-align: center;
          padding-top: var(--base-padding);
          border: 1px dashed var(--color-gray-light);
        }
        
        .product:hover {
          border-style: solid;
        }
        
        .product__price:before {
          content: '$';
        }
        
        .product__name {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .product__image {
          max-width: 65px;
		  padding: .2rem .5rem;
          transition: .3s all;
          filter: drop-shadow(0px 0px 0px transparent);
        }
        
        @media screen and (min-width: 280px) {
          .product__image {
            max-width: 40px;
          }
        }
		@media screen and (min-width: 600px) {
			.product__image {
			  max-width: 100px;
			}
		  }
        
        .product:hover .product__image {
          animation: .5s shake-product-image;
          transform: scale(1.3);
        }
        
        @keyframes shake-product-image {
          25% {
            transform: rotate(-10deg);
          }
        
          50% {
            transform: rotate(10deg);
          }
        
          75% {
            transform: rotate(-10deg);
          }
        
          100% {
            transform: rotate(0deg);
          }
        }
        
        /* ----------------- Cart ----------------- */
        
        .cart {
          display: grid;
          grid-gap: var(--base-padding);
          overflow-x: hidden;
          overflow-y: auto;
        }
        
        .cart h3 {
          margin: 0;
        }
        
        .cart__item {
          display: grid;
          grid-template-columns: 3rem 9rem 5rem 0rem 4rem auto;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          padding: none;
          border: 2px;
          animation: .3s add-cart-item;
        }
        
        .item_qty {
          padding-left: none;
          border: none;
          transition: .3s all;
          font-size: 1.4rem;
        }
        
        @keyframes add-cart-item {
          from {
            margin-left: -200px;
            margin-right: 200px;
            opacity: 0;
          }
        
          to {
            margin-left: 0;
            margin-right: 0;
            opacity: 1;
          }
        }
        
        .cart__item--removed {
          animation: .3s remove-cart-item;
        }
        
        @keyframes remove-cart-item {
          to {
            margin-left: 200px;
            margin-right: -200px;
            opacity: 0;
          }
        }
        
        .cart__item__image {
          max-width: 28px;
        }
        
        @media screen and (min-width: 280px) {
          .cart__item__image {
            max-width: 28.5px;
          }
        }
		@media screen and (min-width: 600px) {
			.cart__item__image {
			  max-width: 38.5px;
			}
		  }
        
        .cart__item__price:before {
          content: '$';
        }
        
        .cart-footer {
          display: flex;
          justify-content: space-between;
          margin-top: var(--base-padding);
        }
        
        .overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: rgba(255, 255, 255, .7);
          cursor: wait;
        }
        </style>
		<main class="main-container">

			<section class="section">
				<h2 class="text-center">Products</h2>
				<div class="products"></div>
			</section>

			<section class="section">
				<h2 class="text-center">Cart</h2>
				<div class="cart"></div>
			</section>

		</main>
        `;
		let prodURL = './src/js/shopping/data/products.json';

		// Fetch data from products.json and store to local storage
		function loadJSONAsync(prodURL) {
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						let prodData = JSON.parse(xhr.responseText);
						localStorage.setItem('shopping_data', JSON.stringify(prodData));
					}
				}
			};
			xhr.open('GET', prodURL, true);
			xhr.send();
		}

		// render products onto the main page.
		function renderProducts() {
			let productContainer = document.querySelector('.products');
			productContainer.innerHTML = "";
			let prodData = JSON.parse(localStorage.getItem('shopping_data')) || [];
			prodData.forEach(item => {
				productContainer.innerHTML += `
			<div class="product">
				<img class="product__image" src="${item.image}" alt="${item.name}">
				<h2 class="product__name">${item.name}</h2>
				<h3 class="product__price">${item.price}</h3>
				<button class="btn btn--primary" data-action="ADD_TO_CART">Add To Cart</button>
			</div>
		`;
			});

		}

		// load product data and render
    // localStorage.clear();
		loadAndRender();
		function loadAndRender() {
			loadJSONAsync(prodURL);
			renderProducts();
		}

		// Add the item with the product id to the current user's cart
		let cartData = JSON.parse(localStorage.getItem('cart')) || [];

		const cartDOM = document.querySelector('.cart');
		const addToCartButtons = document.querySelectorAll('[data-action="ADD_TO_CART"]');

		renderCart();
		function renderCart() {
			if (cartData.length > 0) {
				cartData.forEach(product => {
					insertItemToDOM(product);
					getCartTotal();

					addToCartButtons.forEach(addToCartButton => {
						const productDOM = addToCartButton.parentNode;

						if (productDOM.querySelector('.product__name').innerText === product.name) {
							handleActionButtons(addToCartButton, product);
						}
					});
				});
			}
		}

		addToCartButtons.forEach(addToCartButton => {
			addToCartButton.addEventListener('click', () => {
				const productDOM = addToCartButton.parentNode;
				const product = {
					image: productDOM.querySelector('.product__image').getAttribute('src'),
					name: productDOM.querySelector('.product__name').innerText,
					price: productDOM.querySelector('.product__price').innerText,
					quantity: 1
				};

				const isInCart = cartData.filter(cartItem => cartItem.name === product.name).length > 0;

				if (!isInCart) {
					insertItemToDOM(product);

					cartData.push(product);
					saveCart();
					handleActionButtons(addToCartButton, product);
				}
			});
		});


		// Function to Insert Item to DOM
		function insertItemToDOM(product) {
			cartDOM.insertAdjacentHTML(
				'beforeend',
				`
			<div class="cart__item">
				<img class="cart__item__image" src="${product.image}" alt="${product.name}" >
				<h3 style="font-size: 1.4rem;" class="cart__item__name">${product.name}</h3>
				<h3 style="font-size: 1.5rem;" class="cart__item__price">${product.price}</h3> 
							
				<label for="quantity"></label> 
				<input type="number" name="quantity" value="1" min="1" max="10" step="1" class="btn--primary 
					item_qty${product.quantity === 1 ? ' btn--danger' : ''}" data-action="ITEM_QTY"></input>
				<button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>	
			</div>
		`
			);

			cartFooter();
		}

		// Funtion to Handle Buttons in the cart
		function handleActionButtons(addToCartButton, product) {
			addToCartButton.innerText = 'In Cart';
			addToCartButton.disabled = true;

			const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
			cartItemsDOM.forEach(cartItemDOM => {
				if (cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
					cartItemDOM.querySelector('[data-action="ITEM_QTY"]').addEventListener('click', (el) => getItemQty(el, product, cartItemDOM));
					cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeCartItem(product, cartItemDOM, addToCartButton));
				}
			});
		}

		function getItemQty(el, product, cartItemDOM) {
			cartData.forEach(cartItem => {
				if (cartItem.name === product.name) {
					cartItem.quantity = Number(el.target.value);
					product.quantity = cartItem.quantity;
					if (cartItem.quantity > 1) {
						cartItemDOM.querySelector('.item_qty').classList.remove('btn--danger');
					} else {
						cartItemDOM.querySelector('.item_qty').classList.add('btn--danger');
					}
					saveCart();
				}
			});
		}

		// Function to remove item from cart
		function removeCartItem(product, cartItemDOM, addToCartButton) {
			cartItemDOM.classList.add('cart__item--removed');
			setTimeout(() => cartItemDOM.remove(), 250);
			cartData = cartData.filter(cartItem => cartItem.name !== product.name);
			saveCart();
			addToCartButton.innerText = 'Add To Cart';
			addToCartButton.disabled = false;

			if (cartData.length < 1) {
				document.querySelector('.cart-footer').remove();
			}
		}

		// Function to add cart footer
		function cartFooter() {
			if (document.querySelector('.cart-footer') === null) {
				cartDOM.insertAdjacentHTML(
					'afterend',
					`
			<div class="cart-footer">
				<button class="btn btn--danger" data-action="CLEAR_CART">Clear Cart</button>
				<button class="btn btn--primary" data-action="CHECKOUT">Check Out</button>
			</div>
			`
				);

				document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
				document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => renderCheckout());
			}
		}

		function clearCart() {
			document.querySelectorAll('.cart__item').forEach(cartItemDOM => {
				cartItemDOM.classList.add('cart__item--removed');
				setTimeout(() => cartItemDOM.remove(), 250);
			});

			cartData = [];
			localStorage.removeItem('cart');
			getCartTotal();
			document.querySelector('.cart-footer').remove();

			addToCartButtons.forEach(addToCartButton => {
				addToCartButton.innerText = 'Add To Cart';
				addToCartButton.disabled = false;
			});
		}

		// Function to calculate total amount
		function getCartTotal() {
			let cartTotal = 0;
			cartData.forEach(cartItem => (cartTotal += (cartItem.quantity * cartItem.price) || 0));
			document.querySelector('[data-action="CHECKOUT"]').innerText = `Pay Total $${cartTotal}`;
		}

		// Function to save cart on changes
		function saveCart() {
			localStorage.setItem('cart', JSON.stringify(cartData));
			getCartTotal();
		}

		function renderCheckout() {
			let data = JSON.parse(localStorage.getItem('products')) || [];
			let currUserId = sessionStorage.getItem('currUserId');
			let currentUserCartKey = 'cart_' + currUserId;
			let cart = JSON.parse(localStorage.getItem(currentUserCartKey || "[]"));
			if (cart.length > 0) {
				let cartArr = cart.map(item => {
					for (let i = 0; i < data.length; i++) {
						if (data[i].id === item.id) {
							return { ...data[i], quantity: item.count }
						}
					}
				});
				let rowContainer = document.getElementById('checkout-table-row');
				rowContainer.innerHTML = "";
				let total = 0;
				cartArr.forEach((item, index) => {
					total += (+item.quantity * +item.price);
					rowContainer.innerHTML += `
			<tr>
				<td class="t-row">${index + 1}</td>
				<td class="t-row">${item.name}</td>
				<td class="t-row">₹ ${item.price}</td>
				<td class="t-row">${item.quantity}</td>
				<td class="t-row">₹ ${+item.quantity * +item.price}</td>
			</tr>
			`;
				});
				document.getElementById('total').innerHTML = total;
			} else {
				document.getElementById('confirmPurchase').style.display = 'none';
			}
		}
		function confirmPurchase() {
			let currUserId = sessionStorage.getItem('currUserId');
			let currentUserCartKey = 'cart_' + currUserId;
			localStorage.setItem(currentUserCartKey, JSON.stringify([]));
			window.alert('Thank You for purchase.');
			// window.location = '/index.html';
		}

	}
}

customElements.define("shopping-view", ShopComponent);
