import "./Nav.css"
import { useEffect } from 'react'
import useAOS from "../hooks/useAos"
import { NavLink } from "react-router-dom"

const Nav = () => {

    useEffect(() => {
        useAOS()
    }, [])
    return (
        <nav>
            <ul className="ulItems">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/stacks">Stacks</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projetos</NavLink>
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
