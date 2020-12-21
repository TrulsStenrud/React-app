import { useState } from "react"
import './MenuOverlay.css'
import React from "react"
import MenuButton from "../MenuButton/MenuButton"
import SlidingMenu from "../SlidingMenu/SlidingMenu"

const MenuOverlay = (props: { children: any }) => {

    var [isOpen, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!isOpen)

    function close() {
        if (isOpen) {
            setOpen(false)
        }
    }

    return <div onClick={close}>
        <SlidingMenu show={isOpen} />
        <MenuButton id="menuBtn" onClick={toggleOpen} isClicked={isOpen} />
        <div className="Content">
            <header className="Content-header">
                {props.children}
            </header>
        </div>
    </div>
}

export default MenuOverlay