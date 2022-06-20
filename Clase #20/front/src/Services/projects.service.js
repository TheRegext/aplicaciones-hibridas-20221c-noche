
async function find(){
    return fetch('http://localhost:2022/api/projects')
    .then(response => response.json())
}

async function create(project){
    return fetch('http://localhost:2022/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    }).then(response => response.json())
}

async function findById(id){
    return fetch(`http://localhost:2022/api/projects/${id}`)
    .then(response => response.json())
}

async function findByName(name){
    return fetch(`http://localhost:2022/api/projects/${name}`)
    .then(response => response.json())
}


export {
    find,
    create,
    findById
}