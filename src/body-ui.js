import { LitElement, css, html } from "lit";
import roseGarden from "./assets/rose-garden.png";


import "./styles.css"

class BodyUI extends LitElement {

    static properties = {
        tab: {type: String}
    }

    static styles = css`
        main {
            background-size: cover;
            background-position: center;
            height: 100%;
        }
        .quote {
            text-align: center;
            padding-top: 1.5rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
        @media (max-width: 600px) {
            .quote {
                font-size: 1.5rem;
            }
        }

        .menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1.5rem;
        }

        ul {
            list-style: none;
        }

        .about {
            font-size: 1.2rem;
            padding: 1rem 1rem;
        }
    `

    _addContent() {
        switch (this.tab) {
            case "home":
            return html`
                <div class="quote">
                    🌹 Where Vacation meets Nature 🌿
                </div>
            `;

            case "menu":
            return html`
                <div class="menu">
                    <h2>Our Menu</h2>
                    <ul>
                        <li>🌮 Tacos – ₹150</li>
                        <li>🍕 Margherita Pizza – ₹250</li>
                        <li>🍜 Veg Ramen Bowl – ₹200</li>
                        <li>🥗 Caesar Salad – ₹180</li>
                        <li>🍰 Chocolate Cake – ₹120</li>
                    </ul>
                </div>
            `;

            case "about":
            return html`
                <div class="about">
                   <h2>About Hotel Rose Garden</h2>
                    <p>
                        Nestled in the hills, Hotel Rose Garden is a family-run retreat known for its peaceful
                        ambiance, organic food, and warm hospitality.
                    </p>
                </div>
            `;

            default:
            return html``;
        }
    }

    render() {
        return html`
            <main style="background-image: url(${roseGarden})">
                ${this._addContent()}
            </main>
        `
    }
}

customElements.define("body-ui", BodyUI)