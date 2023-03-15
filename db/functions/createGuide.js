import generateGuideCode from "@/db/functions/generateGuideCode"
import getUsers from './getUsers'
import updateUserAccount from './updateUserAccount'

export default async function (mail) {
    const users = await getUsers()
    const dateObject = new Date()

    let returnedGuideCode = false

    await generateGuideCode()
    .then(async guideCode => {

        const date = {
            day: dateObject.getDate(),
            month: dateObject.getMonth()+1,
            year: dateObject.getFullYear(),
            seconds: (dateObject.getHours()/3600)+(dateObject.getMinutes() / 60)+dateObject.getSeconds()
        }

        let userProfile = await users.filter(user => user.profile.mail === mail)[0]

        let userGuides = userProfile.guides

        if(userGuides.length < 1){
            let newGuide = {
                name: "New guide",
                allowedUsers: [],
                code: "",
                date: date,
                private: true,
                steps: []
            }
        }else{
            const newGuide = {
                name: "New guide",
                allowedUsers: [],
                code: guideCode,
                date: date,
                private: true,
                steps: [
                    {
                        title: "Step 1",
                        content: [
                            {
                                type: "text",
                                value: "Here you can write the content of your step"
                            },
                            {
                                type: "text",
                                value: "This is other content"
                            },
                            {
                                type: "text",
                                value: "And this another one"
                            }
                        ]
                    }
                ]

            }

            userGuides.push(newGuide)

            userProfile.guides = userGuides

            await updateUserAccount(mail, userProfile)
            
            returnedGuideCode = guideCode
            
        }          

    })

    return returnedGuideCode





}

// {
//     name: "Nombre de la guia",
//     allowedUsers: ["user mail"],
//     code: "abcdef",
//     date: {
//         day: "day",
//         month: "month",
//         year: "year",
//         seconds: "total day seconds"
//     },
//     private: "boolean",
//     steps: [
//         {
//             title: "Titulo del paso/step",
//             content: [
//                 {
//                     type: "tipo de contenido de este parrafo (text / image)",
//                     vale: "contenido del parrafo (texto / referencia de imagen)"
//                 }
//             ]
//         }
//     ]
// }