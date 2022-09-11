import "./Initial.css"
import astronaut from "../../../assets/astronaut.png"
import useAOS from "../../hooks/useAos"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Initial = () => {

    const navigate = useNavigate()
    useEffect(() => {
        useAOS({ duration: 2200 })
    }, [])

    return (
        <div className="home">
            <div data-aos="flip-right" className="whoiam">
                <p>oi, sou o</p>
                <h1>Rafael</h1>
                <h3>web dev</h3>
                <h3>ui designer</h3>
                <button className="btn" data-aos="fade-left" id="contactbutton" onClick={() => navigate("/contact")}>contact</button>
            </div>
            <div data-aos="zoom-out" className="img">
                <img id="astro" src={astronaut} alt="" />
            </div>
        </div>
    )
}

export default Initial
