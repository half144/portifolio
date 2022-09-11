import "./Stacks.css"
import { stacks } from "../../db/db"
import useAOS from "../../hooks/useAos"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Stacks = () => {

    useEffect(() => {
        useAOS({ duration: 1900 })
    }, [])

    return (
        <div className="stacks">
            <div className="texts">
                <h1 data-aos="fade-down">Conhecimetos</h1>
                <p data-aos="fade-up">clique no icone para detalhes</p>
            </div>

            <ul className="stacksList">
                {stacks.map(stack => (
                    <li key={stack.id} className="stackItem" data-aos="fade-right" >
                        <h2 data-aos="fade-in">{stack.stackName}</h2>

                        <Link to={`/stack/${stack.id}`} ><img className="stackImg" src={stack.image} alt={stack.stackName} data-aos="flip-right" /> </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Stacks
