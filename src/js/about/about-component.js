// New component
class About extends HTMLElement {
    constructor() {
        super();
    
        this.innerHTML = /*html*/`
            <!-- <h1>Scroll Service</h1> -->
            <h2 id="para" style="font-size: 1.6rem; color: yellow"></h2>
            <h3 id=about1></h3>
            <marquee scrolldelay="50">
                <h3 id=about2 style="color: red"></h3>
            </marquee>
            <marquee scrolldelay="100">
                <h3 id=about3 style="color: yellow"></h3>
            </marquee>
            <marquee scrolldelay="120">
                <h3 id=about4 style="color: orange; background: white"></h3>
            </marquee>
            <marquee scrolldelay="150">
                <h3 id=about5 style="color: green; background: white"></h3>
            </marquee>
            <marquee scrolldelay="170">
                <button style="width: 15.0rem"></button>
            </marquee>
        `;
 
        let aboutClock = new Date().toLocaleTimeString();
        let textDisplay = "";
        let btn = document.querySelector("button");
        let text1 = document.getElementById("para");

        // State
        textDisplay = "A Single Page Application using HTML, CSS and Vanilla JavaScript.";
        text1.innerHTML = textDisplay;

        setInterval(() => {
            aboutClock = new Date().toLocaleTimeString();
            btn.innerHTML = "Clock : " + aboutClock;            
        }, 1000);
        
        printSentence("about1", "SPA logic was written in Vanilla JavaScript");
        printSentence("about2", "Styling done with CSS");
        printSentence("about3", "Layout for this SPA was done using HTML");
        printSentence("about4", " JSON, Session storage and local storage were used for data storage and retrieval");
        printSentence("about5", " Vanilla JS SPA with navigation, state management and custom components");

        function printSentence(id, sentence) {
            for (let i = 0; i < sentence.length; i++) {
                (function (indx) {
                    setTimeout(function () {
                        document.getElementById(id).innerHTML += sentence[indx];
                    }, 100 * i);
                })(i);
            }
        }
    }
}

customElements.define("about-view", About);