import { Link } from "react-router-dom"
const ProjectItem = ({ project }) => {
    return (
        <li data-aos="flip-right" className="projectItem">
            <Link to={`/project/${project.id}`}>
                <div className="image">
                    <img src={`/src/assets/${project.image}`} alt="" />
                </div>
            </Link>

            <p>{project.nameProject}</p>
        </li>
    )
}

export default ProjectItem
