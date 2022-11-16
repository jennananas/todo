import logo from "./images/done-logo.png";
// const logo = require("svg-url-loader!./images/logo-todo.svg");

export default function Header(){
    const header = document.querySelector("header")
    const title = document.createElement("h1")
    title.innerText = "Do it"
    const siteLogo = new Image()
    siteLogo.src = logo
    siteLogo.alt = "logo"
    siteLogo.id = "logo"
    header.append(siteLogo, title)
}