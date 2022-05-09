// New component
class animationUtil extends HTMLElement {
    constructor() {
        super();

        let aboutClock = 0;
        aboutClock = new Date().toLocaleTimeString();
        this.innerHTML = /*html*/`
            <button class="btn">Clock : ${aboutClock}</button>
        `;
 
        let btn2 = this.querySelector(".btn");

        // State
        setInterval(() => {
            aboutClock = new Date().toLocaleTimeString();
            btn2.innerHTML = "Clock : " + aboutClock;            
        }, 1000);
    }
}

customElements.define("animation-view", animationUtil);