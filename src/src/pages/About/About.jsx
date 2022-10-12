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
            <div id="planet" data-aos="fade-down">
                <img src={green} alt="" />
            </div>
            <div className="aboutText" data-aos="fade-up">
                <h1 >Sobre</h1>
                <p>Me chamo Rafael, tenho 17 anos e sempre fui apaixonado por tecnologia, meu primeiro contato com um computador foi em 2007, quando eu tinha 3 anos, mas foi com 9 que me deparei pela primeira vez com desenvolvimento web, quando eu decidi criar um fansite de Habbo Hotel para postar dicas de como pegar emblemas no jogo, com 15 tive meu primeiro contato com JavaScript, mas apenas por diversão, eu ainda não sabia o que queria ser, com 16 me decidi, e desde então, dedico todo meu tempo livre para estudar, ate meu tempo não livre pois se tornou um vicio, me apaixonei de tal forma que se tornou uma obsessão, saio de casa pensando na hora de voltar para poder terminar meus projetos pessoais ou aprender algo novo que ainda não sei, é realmente o que eu quero pra vida e o que eu sinto que nasci pra ser.</p>
            </div>
        </div>
    )
}

export default About
