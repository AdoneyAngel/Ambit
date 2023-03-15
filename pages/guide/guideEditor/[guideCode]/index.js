import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import getGuide from '../../../../db/functions/getGuide'
import Image from "next/image"
import getCookie from '../../../../functions/getCookie'
import updateGuide from '../../../../db/functions/updateGuide'

//images
import settingsIcon from "@/images/setting.png"
import homeIcon from "@/images/home.png"
import GuideStepsEditorItems from '../../../../components/guideStepsEditorItems'

export default function guideEditorPage (){
    const Router = useRouter()
    const guideCode = Router.query.guideCode
    const [userMail, setUserMail] = useState("")
    const [guideStructure, setGuideStructure] = useState(
        {
            name: "",
            allowedUsers: [],
            code: "",
            date: {
                day: 0,
                month: 0,
                year: 0,
                seconds: 0
            },
            private: true,
            steps: []
        }
    )

    const loadUserMail = () => {
        const mail = getCookie("userMail")

        setUserMail(mail)
    }
    
    // const autoSaveGuide = async () => {
    //     await updateGuide(userMail, guideStructure, guideCode)

    //     console.log(guideStructure)

    //     setTimeout(() => {
    //         autoSaveGuide()
    //     }, 4000)

        
    // }

    const saveGuide = async (userMail, newGuide) => {
        if(userMail){
            await updateGuide(userMail, newGuide, guideCode)

            return true

        }else{
            const userMail = getCookie("userMail")
            await updateGuide(userMail, newGuide, guideCode)
            console.log("no mail")
        }
    }
    
    useEffect(() => {
        getGuide(guideCode)
        .then(guide => {
            setGuideStructure(guide)

        })

        console.log("updateGuideCode")

        loadUserMail()

    }, [guideCode])

    useEffect(() => {

        console.log("update")

        saveGuide(userMail, guideStructure)
        
    }, [guideStructure])

    const handleChangeGuideStructure = (newGuideStructure) => {
        setGuideStructure(newGuideStructure)
    }

    return (
        <main className="principalMain">
            <header>
                <button className="pageEditorHomeButton homeBarButton"><Image width="30" src={homeIcon}/></button>
                <button className="homeBarButton"><Image width="30" src={settingsIcon}/></button>
            </header>

            <section className="principalHomeDisplay">

                <GuideStepsEditorItems indexChangeGuideStructure={handleChangeGuideStructure} guideData={guideStructure} steps={guideStructure.steps} />

            </section>

            <footer>

            </footer>

            <style jsx>{`
            
            main{
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 5%;
                height: 100vh;
            }
            main > header{
                width: calc(100% - 30px);
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 15px;
                z-index: 1;
            }
            .principalHomeDisplay{
                margin-top: auto;
                margin-bottom: auto;
                margin-left: auto;
                margin-right: auto;
                width: 70%;
                height: 75%;
            }
            .pageEditorHomeButton{
                margin-right: auto;
            }
            .guideTitleH1{
                font-size: 40px;
                font-weight: 800;
                margin-bottom: 15px;
            }
            
            `}</style>

        </main>
    )
}

//Guide structure:
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