import GuideList from "@/components/GuideList";
import HeaderHome from "@/components/HeaderHome";
import getCookie from "@/functions/getCookie";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//images
import plusIcon from "../images/plus.png"
import searchIcon from "../images/search.png"
import createGuide from '../db/functions/createGuide'


export default function homePage(){
    const [userMail, setUserMail] = useState("")
    const Router = useRouter()

    const handleCreatEGuideClick = () => {
      createGuide(userMail)
      .then(guideCode => {
        
        Router.push(`/guide/guideEditor/${guideCode}`)

      })
    }

    useEffect(() => {
        setUserMail(getCookie("userMail"))
    }, [0])

    return (
        <main>

            <HeaderHome />

            <div className="homeMainContent principalMain">

                <section className="homeButtonList">
                    <button onClick={() => handleCreatEGuideClick()} className="buttonListItem homeBarButton"><Image className="buttonListItemImg" alt="Create guide" src={plusIcon} /></button>
                    <button className="buttonListItem homeBarButton"><Image className="buttonListItemImg" alt="Create guide" src={searchIcon} /></button>
                    <button className="buttonListItem homeBarButton"><Image className="buttonListItemImg" alt="Create guide" src={plusIcon} /></button>
                </section>

                <section className="homeGuideList principalHomeDisplay">
                    <div className="guideList-items">
                        <GuideList mail={userMail} />
                    </div>
                </section>  

            </div>

            <style jsx>{`

            .homeMainContent{
                grid-template-columns: 10% 1fr;
                grid-template-rows: 90%;
            }
            .homeButtonList{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 24px 12px;
                background: white;
                border-radius: 18px;
                height: min-content;
                margin-top: auto;
                margin-bottom: auto;
                max-width: 70px;
                box-shadow: 0px 0px 4px rgba(200, 200, 200, 0.6);
            }
            .homeGuideList{
                margin-top: auto;
            }

            `}</style>

            <style>{`
            
                .buttonListItemImg{
                    width: 70%;
                    height: auto;
                }

            `}</style>

        </main>
    )
}