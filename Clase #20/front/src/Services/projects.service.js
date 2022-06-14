
async function find(){
    const projects  = JSON.parse(localStorage.getItem('projects')) || [];
    return projects
}

async function create(project){
    const projects  = JSON.parse(localStorage.getItem('projects')) || []
    const projectNew = {...project, id: projects.length + 1}
    
    projects.push(projectNew)

    localStorage.setItem('projects', JSON.stringify(projects))

    return projectNew
}


export {
    find,
    create
}