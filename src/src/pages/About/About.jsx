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
                <p>Meu nome é Rafael e tenho 18 anos de idade. Sempre nutri um interesse profundo por tecnologia, tendo tido meu primeiro contato com um computador em 2007, quando eu contava com apenas três anos. Entretanto, foi apenas aos nove anos de idade que me deparei pela primeira vez com o desenvolvimento web, ao decidir criar um fansite dedicado ao Habbo Hotel, com o objetivo de compartilhar dicas sobre como obter emblemas no jogo. Aos 15 anos, tive meu primeiro contato com JavaScript, ainda que por mero entretenimento. Não obstante, aos 16 anos, decidi que essa seria minha área de atuação e, desde então, dedico todo meu tempo livre ao estudo do assunto - de fato, tal dedicação acabou por se tornar uma verdadeira obsessão, de tal forma que passou a ocupar também meu tempo não livre. Sinto-me profundamente apaixonado por essa temática e percebo que se trata de minha verdadeira vocação, dedicando-me incansavelmente ao desenvolvimento de projetos pessoais e ao aprendizado de novos conceitos e técnicas.</p>
            </div>
        </div>
    )
}

export default About
