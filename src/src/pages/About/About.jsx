import "./About.css"
import green from "../../../assets/green.png"
import useAOS from "../../hooks/useAos"
import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        useAOS({ duration: 1300 })
    }, [])
    return (

        <div className="about">
            <div id="planet" data-aos="zoom-in">
                <img src={green} alt="" />
            </div>
            <div className="aboutText" data-aos="fade-up">
                <h1 >Sobre</h1>
                <p>Me chamo Rafael, sou um desenvolvedor Front End. Dei início em minha caminhada de UI Design no começo de 2022. Começei os estudos em desenvolvimento web, e venho aprimorando meus conhecimentos e técnicas.
                    Recentemente, estreei a ponderação em a Biblioteca React.JS. Pretendo entrar na faculdade em 2023, e cursar "Análise e desenvolvimento de Sistemas".
                    Desenvolvo interfaces modernas e de alta qualidade, buscando performace, modernidade e responsividade.</p>
            </div>
        </div>
    )
}

export default About