import "./Nav.css"
import { useEffect } from 'react'
import useAOS from "../hooks/useAos"
import { NavLink } from "react-router-dom"

const Nav = () => {

    useEffect(() => {
        useAOS()
    }, [])
    return (
        <nav data-aos="zoom-in">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
