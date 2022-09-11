import "./Project.css"
import useAOS from "../../hooks/useAos"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useGetProjectId } from "../../db/db"
import './Project.css'
import { useState } from "react"

const Project = () => {
    let { id } = useParams()
    const project = useGetProjectId(id)
    useEffect(() => {
        useAOS({ duration: 1300 })
    }, [])
    return (
        <div className="project">
            {project && (
                <div className="project">
                    <div className="projectImg" data-aos="zoom-in">
                        <img src={`/src/assets/${project.image}`} alt="" />
                    </div>
                    <div className="projectInfo" data-aos="flip-left">
                        <h1>{project.nameProject}</h1>
                        <p >{project.details}</p>
                        <ul id="languages" >
                            {project.languages.map(language => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                        <a id="btnRedirect" href={project.url}>
                            <button className="btn">Visualizar</button>
                        </a>
                        <Link to="/contact">Entrar em contato</Link>
                        <Link to="/projects">Voltar para os projetos</Link>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Project