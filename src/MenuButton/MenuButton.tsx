
import React from "react"
import "./MenuButton.css"



type MenuButtonProps = {
    onClick?: () => void,
    id?: string | undefined,
    isClicked: boolean,
}

const MenuButton = (props: MenuButtonProps) => {

    const state = props.isClicked ? "change" : ""

    const btn:any = <div id={props.id} className="container" onClick={props.onClick}>
        <div id="bar1" className={state}></div>
        <div id="bar2" className={state}></div>
        <div id="bar3" className={state}></div>
    </div>
    return btn
}

export default MenuButton