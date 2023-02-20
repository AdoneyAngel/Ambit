import getUsers from "./getUsers"
import setCookie from '../../functions/setCookie'

export default async function logUser(mail, password){

    const users = await getUsers()

    let userLogged = false

    users.map(user => {
        if(user.profile.mail === mail && user.profile.password === password){
            userLogged = true
        }
    })

    if(userLogged){
        setCookie("userMail", mail)
        return true

    }else{
        return false
    }
}