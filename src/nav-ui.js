import { LitElement, css, html } from "lit";

class NavUI extends LitElement {

    constructor() {
        super()
        this.selected = "home"
    }

    static properties = {
        selected : {type: String}
    }

    static styles = css`

        :host {
            display: block;
        }
        header{
            display: flex;
            justify-content: space-between;
            padding: 0 1rem;
            align-items: center;
            background-color: #DDDEAB;
        }
        .buttons{
            display:flex;
            align-items: center;
        }
        .nav-buttons {
            padding: 0.5rem;
            font-size: 1.2rem;
            border: none;
            background-color: #DDDEAB;
            border-radius: 10px;
        }
        .nav-buttons:hover {
            cursor: pointer;
            border: 1px solid #8ABB6C;
        }

        @media (max-width: 600px) {
            header {
                flex-direction: column;

            }
            h1{
                font-size: 1.5rem;
            }
        }

        .selected {
            border: 1px solid #8ABB6C;
        }
    `

    _selectOption(e) {
        const tab = e.target.dataset.tab;
        this.selected = tab;
        this.dispatchEvent(new CustomEvent("tab-change", {
            detail: { tab },
            bubbles: true,
            composed: true,
        }));
    }


    render() {
        return html`
        <header>
            <h1>Welcome to Hotel Rose Garden</h1>
            <div class="buttons">
                <nav><button class="nav-buttons ${this.selected == "home" ? "selected": ""} " data-tab="home" @click=${this._selectOption}>Home</button></nav>
                <nav><button class="nav-buttons ${this.selected == "menu" ? "selected": ""}" data-tab="menu" @click=${this._selectOption}>Menu</button></nav>
                <nav><button class="nav-buttons ${this.selected == "about" ? "selected": ""}" data-tab="about" @click=${this._selectOption}>About</button></nav>
            </div>
        </header>
        `
    }
}

customElements.define("nav-ui", NavUI)