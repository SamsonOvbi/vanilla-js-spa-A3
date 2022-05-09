
// New component
class ShopComponent extends HTMLElement {
    constructor() {
        super();

        let speed = 1;

        this.innerHTML = /*html*/`
        <style>
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
        
        :root {
          --primary-100: hsl(21, 94%, 87%);
          --primary-200: hsl(21, 80%, 74%);
          --primary-300: hsl(21, 65%, 59%);
          --primary-400: hsl(21, 57%, 50%);
          /* primary/main color */
          --primary-500: hsl(21, 62%, 45%);
          --primary-600: hsl(21, 77%, 34%);
          --primary-700: hsl(21, 81%, 29%);
          --primary-800: hsl(21, 84%, 25%);
          --primary-900: hsl(21, 91%, 17%);
        
          /* grey */
          --grey-50: #f8fafc;
          --grey-100: #f1f5f9;
          --grey-200: #e2e8f0;
          --grey-300: #cbd5e1;
          --grey-400: #94a3b8;
          --grey-500: #64748b;
          --grey-600: #475569;
          --grey-700: #334155;
          --grey-800: #1e293b;
          --grey-900: #0f172a;
          /* rest of the colors */
          --black: #222;
          --white: #fff;
          --red-light: #f8d7da;
          --red-dark: #842029;
          --green-light: #d1e7dd;
          --green-dark: #0f5132;
        
          --smallText: 0.7em;
          /* rest of the vars */
          --backgroundColor: var(--grey-50);
          --textColor: var(--grey-900);
          --borderRadius: 0.25rem;
          --letterSpacing: 1px;
          --transition: 0.3s ease-in-out all;
          --max-width: 1120px;
          --fixed-width: 600px;
          --fluid-width: 90vw;
          /* box shadow*/
          --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        body {
          background: var(--backgroundColor);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-weight: 400;
          line-height: 1.75;
          color: var(--textColor);
        }
        
        p {
          margin-bottom: 1.5rem;
          max-width: 40em;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
          margin-bottom: 1.38rem;
          font-family: var(--headingFont);
          font-weight: 400;
          line-height: 1.3;
          text-transform: capitalize;
          letter-spacing: var(--letterSpacing);
        }
        
        h1 {
          margin-top: 0;
          font-size: 3.052rem;
        }
        
        h2 {
          font-size: 2.441rem;
        }
        
        h3 {
          font-size: 1.953rem;
        }
        
        h4 {
          font-size: 1.563rem;
        }
        
        h5 {
          font-size: 1.25rem;
        }
        
        small,
        .text-small {
          font-size: var(--smallText);
        }
        
        a {
          text-decoration: none;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        
        .img {
          width: 100%;
          display: block;
          object-fit: cover;
        }
        /*
        =============== 
        Products 
        ===============
        */
        .shops {
          width: var(--fluid-width);
          display: grid;
          grid-gap: 1rem;
          margin: 4rem auto;
          max-width: var(--max-width);
        }
        
        .filters-container h5 {
          font-weight: 500;
          margin: 1.5rem 0 0.5rem;
          font-size: 0.85rem;
        }
        
        .search-input {
          width: 15em;
          padding: 0.5rem;
          background: var(--grey-200);
          border-radius: var(--borderRadius);
          border-color: transparent;
          letter-spacing: var(--letterSpacing);
        }
        
        .category-btn {
          display: block;
          margin: 0.25em 0;
          padding: 0.25rem;
          text-transform: capitalize;
          background: transparent;
          border-color: transparent;
          letter-spacing: var(--letterSpacing);
          color: var(--grey-500);
          cursor: pointer;
          transition: var(--transition);
          font-size: 0.85rem;
        }
        .category-btn:hover {
          color: var(--grey-700);
        }
      
        .shop {
          margin-bottom: 1rem;
        }
        .shop-img {
          border-radius: 5%;
          height: 15rem;
          width: 15em;
        }
        .shop div {
          padding: 0.75rem 0;
          text-align: center;
        }
        .shop-name {
          margin-bottom: 0.25rem;
          text-transform: capitalize;
          letter-spacing: var(--letterSpacing);
          color: var(--grey-500);
          font-size: 0.6rem;
        }
        .shop-description {
          margin-bottom: 0.35rem;
          text-transform: none;
          letter-spacing: var(--letterSpacing);
          color: var(--grey-900);
          font-size: 0.7rem;
        }
        .shop-price {
          margin-bottom: 0;
          color: var(--grey-700);
          font-weight: 700;
          font-size: 0.6rem;
          letter-spacing: var(--letterSpacing);
        }
        .shops-container {
          width: 80%;
        }
        @media screen and (min-width: 250px) {
          .shops {
            grid-template-columns: 120px 1fr;
            margin: 1.5rem auto;
          }
          .shops-container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: .5rem;
          }
          .shops-container .shop-img {
            height: 8rem;
            width: 8em;
          }
          .search-input {
            width: 7em;
          }
        }
        @media screen and (min-width: 360px) {
          .shops-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: .5rem;
            width: 8em;
          }
          .shops-container .shop-img {
            height: 8rem;
            width: 8em;
          }
        }
        @media screen and (min-width: 768px) {
          .shops {
            grid-template-columns: 150px 1fr;
            margin: 2rem auto;
          }
          .shops-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            width: 9rem;
          }
          .shops-container .shop-img {
            height: 9rem;
            width: 9rem;
          }
          .search-input {
            width: 8em;
          }
        }
        @media screen and (min-width: 992px) {
          .shops-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            width: 10rem;
          }
          .shops-container .shop-img {
            height: 10rem;
            
          }
          .shops-container .shop-name {
            font-size: 0.85rem;
          }
          .shops-container .shop-description {
            font-size: 0.95rem;
          }
          .shops-container .shop-price {
            font-size: 0.85rem;
          }
          .shop {
            margin-bottom: 0;
          }
          .search-input {
            width: 10em;
          }
        }
        @media screen and (min-width: 1170px) {
          .shops-container {
            grid-template-columns: repeat(5, 1fr);
            gap: 2rem;
            width: 12rem;
          }
          .shops-container .shop-img {
            height: 12rem;            
          }
        }
                
        </style>

        <!-- shops -->
        <section class="shops">
          <!-- filters -->
          <div class="filters-container">
            <!-- search -->
            <form class="input-form">
              <input type="text" class="search-input" placeholder="item search..." />
            </form>
            <!-- categories --> 
            <h5>Shop</h5>
            <article class="categories">
              <button class="category-btn">all</button>
              <button class="category-btn">Janet Zeta Jones</button>
              <button class="category-btn">Janet Belle Jumbot</button>
            </article>
          </div>
          <!-- shops -->
          <div class="shops-container">
            <!-- single shop -->
          </div>
        </section>
        
      `;
  'use strict';

  const shopURL = "./src/js/utility/shops/data/shops.json";
  console.log(shopURL);

  // Fetch data from products.json and store to local storage
  function loadJSONAsync(shopURL) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status <= 299) {
          let prodData = JSON.parse(xhr.responseText);
          
          localStorage.setItem('shop_data', JSON.stringify(prodData));
        }
      }
    };
    xhr.open('GET', shopURL, true);
    xhr.send();
    
  }

  let fun_empl = JSON.parse(localStorage.getItem('shop_data')) || [];
  let filteredShops = [...fun_empl];
  // localStorage.clear();

  const shopsContainer = document.querySelector('.shops-container');

  const displayShops = (dispItem) => {
    if (dispItem.length < 1) {
      shopsContainer.innerHTML = `<h6>Sorry, no shops matched your search</h6>`;
      return;
    }

    shopsContainer.innerHTML = dispItem
      .map((shop) => {
        const { id, name, category, image, price } = shop;
        return `
              <article class="shop" data-id="${id}">              
                <img src="${image}" class="shop-img img" alt="${name}"
                  src="./src/js/shops/img/runningshoe.jpg"
                />
                <div> 
                  <h5 class="shop-name">${name}</h5>
                  <span class="shop-price">$${price}</span>
                </div>
              </article>
              `;

      })
      .join('');
      
  };

  renderProd();
  function renderProd() {
    // load product data and render
    loadJSONAsync(shopURL);
    displayShops(fun_empl);
    
  }

  /* document.addEventListener("DOMContentLoaded", () => {
    // load product data and render
    loadJSONAsync(shopURL);
    displayShops(fun_empl);
  }); */

  // Text Filter

  const form = document.querySelector('.input-form');
  const searchInput = document.querySelector('.search-input');

  form.addEventListener('keyup', () => {
    const inputValue = searchInput.value;
    filteredShops = fun_empl.filter((shop) => {
      return shop.name.toLowerCase().includes(inputValue);
    });
    displayShops(filteredShops);
  });

  // Filter Buttons
  const categoriesDOM = document.querySelector('.categories');

  const displayButtons = () => {
    const buttons = [
      'all',
      ...new Set(fun_empl.map((shop) => shop.category)),
    ];
    // console.log(buttons);

    categoriesDOM.innerHTML = buttons
      .map((category) => {
        return `<button class='category-btn' data-id="${category}">${category}</button>`;
      })
      .join('');
  };

  displayButtons();

  categoriesDOM.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('category-btn')) {
      if (el.dataset.id === 'all') {
        filteredShops = [...fun_empl];
      } else {
        filteredShops = fun_empl.filter((shop) => {
          return shop.category === el.dataset.id;
        });
      }
      searchInput.value = '';
      displayShops(filteredShops);
    }
  });

    }
}

customElements.define("shop-view", ShopComponent);
