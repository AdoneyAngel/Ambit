import getUserAccount from './getUserAccount'
import updateUserAccount from './updateUserAccount'

export default async function updateGuide  (mail, newGuide, guideCode) {

    getUserAccount(mail).then((userAccount) => {

        let newUserAccount = userAccount
        
        newUserAccount.guides = userAccount.guides.map(guide => {

            if (guide.code === guideCode){
                console.log("coincide")
                return newGuide

            }else{
                return guide
                
            }
        })   

        console.log(newGuide)
        console.log(newUserAccount)

    })

}