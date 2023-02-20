import { getDocs, collection } from "firebase/firestore"
import db from "../db"
 
export default async function getUserProfile(mail){
    const usersRef = collection(db, "users")
    const users = await getDocs(usersRef)

    const userProfile = users.docs.filter(user => user.data().profile.mail === mail)[0].data()

    return userProfile.profile

}