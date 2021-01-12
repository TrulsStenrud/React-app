import { Link } from "react-router-dom"
import "./SlidingMenu.css"
import React from "react"


const SlidingMenu = (props: { show: boolean }) => {
    const visibility = props.show ? "show" : "hide"
    return <div id="slidingMenu" className={visibility}>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/roles">Roles</Link>
    </div>
}

export default SlidingMenu