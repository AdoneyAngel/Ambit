import db from "../db";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import getUserDoc from './getUserDoc'


export default async function updateUserAccount (userMail, newAccount){

    let userDoc = await getUserDoc(userMail)

    const userRef = doc(db, "users", userDoc.id)

    await updateDoc(userRef, newAccount)
}