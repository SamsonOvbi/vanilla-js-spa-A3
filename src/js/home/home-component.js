// New component
class Counter extends HTMLElement {
    constructor() {
        super();
        
        var speed = 1, count = 0;
        var navCommand = "", clickCommand = "";
        
        this.innerHTML = /*html*/`        
            <style>               
            </style>
            <p> ${navCommand}</p>
            <text>Clicks: ${count}</text> <br />
            <p id="cntText" style="font-size: 1.5rem;">${clickCommand}</p>
            <nav>
                <h3>
                    <label for="speed" style="font-size: 1.5rem;">Click speed:</label>
                    <input type="number" name="speed" id="speed" value="1" min="1" max="10" step="1" style="color: blue"> 
                </h3>
                <button id="decrease" class="btn">Decrease count</button>
                <button id="increase" class="btn">Increase count</button>
            </nav>
        `;
        
        const speedEl = document.getElementById('speed');
        const btn = document.getElementById('increase');
        const btn2 = document.getElementById('decrease');
        const text1 = document.querySelector('p')
        const textEl = document.querySelector('text')
        const cText = document.getElementById('cntText');

        // State
        btn.onclick = () => {
            count += speed;
            textEl.innerHTML = `Clicks:  ${count}`;
        };

        btn2.onclick = () => {
            count -= speed;
            textEl.innerHTML = `Clicks:  ${count}`;
        };

        navCommand = "Click the Navigation Buttons above to move between views";        
        clickCommand = "Click the buttons below to decrement or increment the click count";
        
        text1.innerHTML = navCommand;
        cText.innerHTML = clickCommand;
        speedEl.addEventListener('input', (el) => speed = Number(el.target.value));
    }
}

customElements.define("click-counter", Counter);
