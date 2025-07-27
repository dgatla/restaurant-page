import { LitElement, css, html } from "lit";
import "./nav-ui.js"
import "./body-ui.js"



class AppUI extends LitElement {

    static properties = {
        tab: {type: String}
    }

    constructor() {
        super()
        this.tab = "home";
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('tab-change', (e) => {
            console.log("Event caught")
            this.tab = e.detail.tab;
        });
    }


    render() {
        return html`
            <nav-ui></nav-ui>
            <body-ui .tab=${this.tab}></body-ui>
        `
    }
}

customElements.define('app-ui', AppUI);
