import {useState} from "react"
import "./header.scss"

function Heading() {
    return (
    <header className="headWrap">
        <li className="listWrap">
            <ul className="ulElem">HOME</ul>
            <ul className="ulElem">ABOUT</ul>
            <ul className="ulElem">PORTFOLIO</ul>
            <ul className="ulElem">CONTACT</ul>
        </li>
    </header>
    )
}

export default  Heading