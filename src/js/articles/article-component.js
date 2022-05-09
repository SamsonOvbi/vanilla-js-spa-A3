// New component
class ArticleComponent extends HTMLElement {
  constructor() {
    super();

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
    .articles {
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
    .article {
      margin-bottom: 1rem;
    }
    .article-img {
      border-radius: 5%;
      height: 15rem;
      width: 15em;
    }
    .article footer {
      padding: 0.75rem 0;
      text-align: center;
    }
    .article-author,
    .article-title {
      margin-bottom: 0.25rem;
      text-transform: capitalize;
      letter-spacing: var(--letterSpacing);
      color: var(--grey-500);
      font-size: 0.7rem;
    }
    .article-description {
      width: 20rem;
      margin-bottom: 0.35rem;
      text-transform: none;
      letter-spacing: var(--letterSpacing);
      color: var(--grey-900);
      font-size: 0.7rem;
    }
    .article-year {
      margin-bottom: 0;
      color: var(--grey-700);
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: var(--letterSpacing);
      font-size: 0.7rem;
    }
    .articles-container {
      width: 80%;
    }
    @media screen and (min-width: 280px) {
      .articles {
        grid-template-columns: 150px 1fr;
        margin: 1.5rem auto;
      }
      .articles-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .5rem;
        width: 6rem;
      }
      .articles-container .article-img {
        height: 6rem;
        width: 6rem;
      }
      .article-description {
        width: 12rem;
      }
      .search-input {
        width: 8em;
      }
    }
    @media screen and (min-width: 480px) {
      .articles-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .5rem;
        width: 8rem;
      }
      .articles-container .article-img {
        height: 8rem;
        width: 8rem;
      }
      .article-description {
        width: 18rem;
      }
    }
    @media screen and (min-width: 768px) {
      .articles {
        grid-template-columns: 180px 1fr;
        margin: 2rem auto;
      }
      .articles-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        width: 9rem;
      }
      .articles-container .article-img {
        height: 9rem;
        width: 9rem;
      }
      .article-description {
        width: 20rem;
      }
      .search-input {
        width: 10em;
      }
    }
    @media screen and (min-width: 992px) {
      .articles-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        width: 9rem;
      }
      .articles-container .article-img {
        height: 9rem;
        width: 9rem;
      }
      .article-description {
        width: 26rem;
      }
      .articles-container .article-author {
        font-size: 0.85rem;
      }
      .articles-container .article-title {
        font-size: 0.85rem;
      }
      .articles-container .article-description {
        font-size: 0.95rem;
      }
      .articles-container .article-year {
        font-size: 0.85rem;
      }
      .article {
        margin-bottom: 0;
      }
      .search-input {
        width: 12em;
      }
    }
    @media screen and (min-width: 1170px) {
      .articles-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        width: 10rem;
      }
      .articles-container .article-img {
        height: 10rem;
        width: 10rem;
      }
      .article-description {
        width: 30rem;
      }
    }
            
    </style>

    <!-- articles -->
    <section class="articles">
      <!-- filters -->
      <div class="filters-container">
        <!-- search -->
        <form class="input-form">
          <input type="text" class="search-input" placeholder="title search..." />
        </form>
        <!-- categories --> 
        <h5>Article</h5>
        <article class="categories">
          <button class="category-btn">all</button>
          <button class="category-btn">Allan Quartermain</button>
          <button class="category-btn">Beauty and the Beast</button>
        </article>
      </div>
      <!-- articles -->
      <div class="articles-container">
        <!-- single article -->
      </div>
    </section>
    
  `;
    'use strict';

    const contactURL = "./src/js/articles/data/articles.json";
    console.log(contactURL);

    // Fetch data from products.json and store to local storage
    function loadJSONAsync(contactURL) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status <= 299) {
            let prodData = JSON.parse(xhr.responseText);

            localStorage.setItem('articles_data', JSON.stringify(prodData));
          }
        }
      };
      xhr.open('GET', contactURL, true);
      xhr.send();

    }

    let fun_empl = JSON.parse(localStorage.getItem('articles_data')) || [];
    let filteredArticles = [...fun_empl];
    localStorage.clear();

    const articlesContainer = document.querySelector('.articles-container');

    const displayArticles = (dispItem) => {
      if (dispItem.length < 1) {
        articlesContainer.innerHTML = `<h6>Sorry, no articles matched your search</h6>`;
        return;
      }

      articlesContainer.innerHTML = dispItem
        .map((article) => {
          
          const { id, title, author, image, pages, description, year } = article;
          return `
          <article class="article" data-id="${id}">              
            <img src="${image}" class="article-img img" alt="${title}"
              src="./src/js/articles/img/runningshoe.jpg"
            />
            <footer>
              <h5 class="article-title">${title}</h5>
              <span class="article-author">${author}</span>
            </footer>
          </article>
          <article class="article">
              <h4>Details</h4>
              <h5 class="article-title">Title: ${title}</h5>
                Author(s): <span class="article-author">${author}</span>
              <h5 class="article-year">Pages: ${pages || " "}</h5>
              <h5 class="article-description">Description: ${description || " "}</h5>
              <h5 class="article-year">Year: ${year || " "}</h5>
          </article>
          `;

        })
        .join('');

    };

    renderProd();
    function renderProd() {
      // load product data and render
      loadJSONAsync(contactURL);
      displayArticles(fun_empl);

    }

    // Text Filter

    const form = document.querySelector('.input-form');
    const searchInput = document.querySelector('.search-input');

    form.addEventListener('keyup', () => {
      const inputValue = searchInput.value;
      filteredArticles = fun_empl.filter((article) => {
        return article.title.toLowerCase().includes(inputValue);
      });
      displayArticles(filteredArticles);
    });

    // Filter Buttons
    const categoriesDOM = document.querySelector('.categories');

    const displayButtons = () => {
      const buttons = [
        'all',
        ...new Set(fun_empl.map((article) => article.category)),
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
          filteredArticles = [...fun_empl];
        } else {
          filteredArticles = fun_empl.filter((article) => {
            return article.category === el.dataset.id;
          });
        }
        searchInput.value = '';
        displayArticles(filteredArticles);
      }
    });

  }
}

customElements.define("article-view", ArticleComponent);
