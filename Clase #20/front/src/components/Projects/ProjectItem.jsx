import React from 'react'
import {Link} from 'react-router-dom'
import ProjectShowCount from './ProjectShowCount'

function ProjectItem({project}) {

    return (
        <li>
            <ProjectShowCount />
            <Link to={`/projects/${project._id}`}>1-{project.name}</Link>
        </li>
    )
}

export default ProjectItem  