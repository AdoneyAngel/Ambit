import { collection, getDocs } from "firebase/firestore"
import db from "../db"

export default async function getUserAccount(mail){

    if(!mail || mail === undefined){
        return false
    }

    const usersRef = collection(db, "users")
    const users = await getDocs(usersRef)

    const userAccount = users.docs.filter(user => user.data().profile.mail === mail)[0]

    return userAccount.data()
}