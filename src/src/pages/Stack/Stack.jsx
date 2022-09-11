import "./Stack.css"
import { stacks, useGetStack } from "../../db/db"
import useAOS from "../../hooks/useAos"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const Stack = () => {
    const { name } = useParams()
    const stack = useGetStack(name)

    useEffect(() => {
        useAOS({ duration: 1300 })
    }, [])

    return (
        <div className="stack">
            {stack && (
                <>
                    <div className="stackImg">
                        <img src={stack.image} alt={stack.stackName} data-aos="flip-right" />
                    </div>
                    <div data-aos="fade-right" className="stackInfo">
                        <h1>{stack.stackName}</h1>
                        <div className="resume">
                            <p >{stack.resume}</p>
                            <Link to="/stacks">Ver outras stacks</Link>
                        </div>

                    </div>

                </>
            )}
        </div>
    )
}

export default Stack
