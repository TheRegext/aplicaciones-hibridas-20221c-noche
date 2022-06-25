async function login(email, password){
    return fetch('http://localhost:2022/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(async response => {
        if(response.status === 200){
            return response.json()
        }
        throw new Error('Error de autenticación');
    })
    
}

export {
    login
}