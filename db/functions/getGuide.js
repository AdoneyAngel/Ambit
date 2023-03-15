import getUsers from './getUsers'

export default async function getGuide(guideCode){
    const users = await getUsers()

    let guideFound = false

    users.map(user => {
        
        user.guides.map(guide => {
            
            if(guide.code == guideCode){
                guideFound = guide
            }

        })

    })

    if(guideFound){
        return guideFound
        
    }else{
        return false

    }
}