
// New component
class ArticleHello extends HTMLElement {
    constructor() {
        super();

        let speed = 1;

        this.innerHTML = /*html*/`

            <style>
                section {
                    font-family: 'Times New Roman', Times, serif;
                    height: 50vh;
                    width: 90vw;
                    background-color: #fff;
                }
                
                yell, bluu, redy, grn{
                    font-family: "Consolas",monospace;
                    font-size: 24px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                
                yell{
                    color: yellow ;
                }
                
                bluu {  
                    color: blue;
                }
                
                redy {
                    color: red;
                }

                grn {
                    color: green;
                }
            </style>
                <section>
                <marquee scrolldelay="50">
                <yell id="resultA0"></yell>
                </marquee>
                <marquee scrolldelay="100">
                    <bluu id="resultA1"></bluu>
                </marquee>
                <marquee scrolldelay="150">
                    <grn id="resultA2" style="color: green"></grn>
                </marquee>
                </marquee>
                <footer autocapitalize="words" align="center">
                    <redy id="resultA3"></redy>
                </footer>
            </section>
        `;
        printSentence("resultA0", "Hello, It is a beautiful day to code in JavaScript");
        printSentence("resultA1", "Hello, Code To Scroll Across Page Faster");
        printSentence("resultA3", "I code in Angular and Typescript too");
        printSentence("resultA2", "Hello, I am coding in HTML, CSS and JavaScript");
    
        function printSentence(id, sentence) {
            for (var i = 0; i < sentence.length; i++) {
                (function (indx) {
                    setTimeout(function () {
                        document.getElementById(id).innerHTML += sentence[indx];
                    }, 100 * indx);
                })(i);
            }
        }
    }
}

customElements.define("hello-view", ArticleHello);
