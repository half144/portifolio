import "./Projects.css"
import useAOS from "../../hooks/useAos"
import { useEffect } from "react"
import ProjectItem from "../../components/ProjectItem"
import { db } from "../../db/db"
import NoProjectItem from "../../components/NoProjectItem"

const Projects = () => {

    useEffect(() => {
        useAOS({ duration: 1400 })
    }, [])

    return (
        <div className="projects">
            <h1 id="title" data-aos="zoom-in">Projetos</h1>
            <div id="projectsArea">
                <ul className="projectItems">
                    {db && db.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                    {!db && <NoProjectItem />}
                </ul>
            </div>
        </div>
    )
}

export default Projects