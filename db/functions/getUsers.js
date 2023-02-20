import db from "../db"
import { doc, getDocs, collection } from "firebase/firestore"

export default async function getUsers() {
    const usersDoc = collection(db, "users")
    let users = await getDocs(usersDoc)
    
    users = users.docs.map(user => user.data())

    return users
}