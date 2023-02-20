import getUsers from "./getUsers"

export default async function logUser(mail, password){

    const users = await getUsers()

    let userLogged = false

    users.map(user => {
        if(user.profile.mail === mail && user.profile.password === password){
            userLogged = true
        }
    })

    if(userLogged){
        return true

    }else{
        return false
    }
}