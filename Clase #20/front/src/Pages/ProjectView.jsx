import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as ProjectService from "../Services/projects.service.js"


function ProjectView({  }) {
    const { idProject } = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
        ProjectService.findById(idProject)
        .then(project => setProject(project))
    }, [idProject])

    return (
        <div>
            <h1>Project View</h1>
            Nombre: {project.name}
        </div>
    )
}

export default ProjectView
