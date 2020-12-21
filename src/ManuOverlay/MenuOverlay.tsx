import { useState, useEffect } from "react"
import './MenuOverlay.css'
import React from "react"

const MenuOverlay = (props: { children: any }) => {

    var [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)
    
    const visibility = isOpen ? "show" : "hide"

    return <>
        <div id="slidingMenu" className={visibility}>
            This is my sliding menu
        </div>
        <button id="menuBtn" onClick={toggleOpen}>
            Menu button
        </button>
        <div className="Content">
            <header className="Content-header">
                {props.children}
            </header>
        </div>
    </>
}

export default MenuOverlay