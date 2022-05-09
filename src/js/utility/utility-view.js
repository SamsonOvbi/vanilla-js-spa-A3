import "./animation/animation-component.js";
import "./hello/hello-component.js";
import "./shops/shop-component.js";

export default () => /*html*/`
    <nav>       
        <p style="font-size: 1.8rem; color: yellow">Utility Applications</p>
        <animation-view></animation-view>
    </nav>       
    <nav>        
        <a href="/utility/:id2" data-link>Hello App</a>
        <a href="/shop" data-link>Shop App</a>
    </nav>
`;
