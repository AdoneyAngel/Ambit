import db from "../db";
import { collection, addDoc } from "firebase/firestore"
import getUsers from "./getUsers";

export default async function (name, mail, password) {

	let validEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	// Using test we can check if the text match the pattern
	if( !validEmail.test(mail) ){

		return {
            created: false,
            error: "invalid"
        }

	}

    const users = await getUsers()

    let nameExist = false
    let mailExist = false

    users.map(user => {
        if(user.profile.mail === mail){
            mailExist = true

        }else if(user.profile.name === name){
            nameExist = true

        }
    })

    if(!nameExist && !mailExist){
        const newUser = {
            guides: [],
            joinedGuides: [],
            profile: {
                name: name,
                mail: mail,
                password: password
            }
        }

        const createUser = await addDoc(collection(db, "users"), newUser)

        return {
            created: true
        }  

    }else{
        return {
            created: false,
            error: mailExist ? "mail" : "name"
        }
    }


}