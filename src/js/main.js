import home from "./home/home-view.js";
import about from "./about/about-view.js";
import employee from "./employees/employee-view.js";

import product from "./products/product-view.js";
import department from "./departments/department-view.js";
import article from "./articles/article-view.js";
import shopping from "./shopping/shopping-view.js";

import utility from "./utility/utility-view.js";
import helloApp from "./utility/hello/hello-view.js"; 
import shopApp from "./utility/shops/shop-view.js"; 

const routes = { 
    "/": { title: "Home", render: home }, 
    "/about": { title: "About", render: about },
    "/employee": { title: "Employee", render: employee },

    "/department": { title: "Department", render: department },
    "/product": { title: "Product", render: product },
    "/article": { title: "Article", render: article },
    "/shopping": { title: "Shopping", render: shopping },

    "/utility": { title: "Utility", render: utility },
    "/utility/:id2": { title: "HelloApp", render: helloApp },
    "/shop": { title: "ShopApp", render: shopApp },

};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
        router();
    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
