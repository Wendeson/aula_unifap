async function fatuserdata(user){
    const response = await fetch(`https://api.github.com/users/${user}`)
    const data = await response.json()
    return data
}

async function user(user){
    try {
        const perfil = await fatuserdata(user)
        console.log(`Nome: ${perfil.name}`)
        console.log(`bio: ${perfil.bio}`)
        console.log(`Repositorios publicos: ${perfil.public_repos}`)
    } catch (error) {
        console.log(`Erro ao buscar dados do usuário ${error.message}`)
    }
}

user('marciogbs')