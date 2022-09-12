import "./Nav.css"
import { useEffect } from 'react'
import useAOS from "../hooks/useAos"
import { NavLink } from "react-router-dom"

const Nav = () => {

    useEffect(() => {
        useAOS()
    }, [])
    return (
        <nav data-aos="fade-right">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/stacks">Competencias</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contato</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
