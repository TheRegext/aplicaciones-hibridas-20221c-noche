import { useEffect, useState } from "react";
import * as ProjectService from "../../Services/projects.service";
import ProjectForm from "./ProjectForm";


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
        <div>
            <ProjectForm onSubmit={saveProject} />
            <ul>
                {projects.map((project, i) => <li key={i}>{project.name}</li>)}
            </ul>

        </div>
    )
}

export default ProjectList