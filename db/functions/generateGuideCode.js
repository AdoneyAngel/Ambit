import getUsers from "./getUsers"

const generateCode = () => {
    const n1 = Math.floor(Math.random()*9)
    const n2 = Math.floor(Math.random()*9)
    const n3 = Math.floor(Math.random()*9)
    const n4 = Math.floor(Math.random()*9)
    const n5 = Math.floor(Math.random()*9)

    return `${n1}${n2}${n3}${n4}${n5}`

}

export default async function generateGuideCode (){

    let guideCode

    await getUsers()
    .then(users => {
        let avaliableCode = true
        let code = 0

        do{
            let newCode = generateCode()

            console.log("CODE TYPE: " + typeof(newCode))
            code = newCode
            avaliableCode = true

            users.map(user => {
                user.guides.map(guide => {
                    if(guide.code == newCode){
                        avaliableCode = false
                    }
                })
            })
        }while(!avaliableCode)

        guideCode = code
    })

    return guideCode
}