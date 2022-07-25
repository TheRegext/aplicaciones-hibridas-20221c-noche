import React, { useEffect, useState } from "react";
import * as ProjectService from "../../Services/projects.service";
import ProjectForm from "./ProjectForm"
import ProjectItem from "./ProjectItem"

import {ProjectContext} from "../../Context/ProjectContext"

function ProjectList({}){
    const [projects, setProjects] = useState([]);
    
    useEffect(()=>{
        ProjectService.find()
        .then(projects => setProjects(projects))
    }, [])

    function saveProject(project){
        ProjectService.create(project)
        .then(()=>ProjectService.find())
        .then(projects => setProjects(projects))
    }

    return (
        <ProjectContext.Provider value={{projects, saveProject}} >
            <ProjectForm onSubmit={saveProject} />
            <ul>
                {projects.map((project, i) => <ProjectItem key={i} project={project}/>)}
            </ul>

        </ProjectContext.Provider>
    )
}

export default ProjectList