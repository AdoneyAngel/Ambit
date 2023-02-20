import GuideList from "@/components/GuideList";
import HeaderHome from "@/components/HeaderHome";
import getCookie from "@/functions/getCookie";
import { useState, useEffect } from "react";
import Image from "next/image";

//images
import plusIcon from "../../images/plus.png"
import searchIcon from "../../images/search.png"


export default function homePage(){
    const [userMail, setUserMail] = useState("")

    useEffect(() => {
        setUserMail(getCookie("userMail"))
    }, [0])

    return (
        <main>

            <HeaderHome />

            <div className="homeMainContent">

                <section className="homeButtonList">
                    <button className="buttonListItem"><Image className="buttonListItemImg" alt="Create guide" src={plusIcon} /></button>
                    <button className="buttonListItem"><Image className="buttonListItemImg" alt="Create guide" src={searchIcon} /></button>
                    <button className="buttonListItem"><Image className="buttonListItemImg" alt="Create guide" src={plusIcon} /></button>
                </section>

                <section className="homeGuideList">
                    <div className="guideList-items">
                        <GuideList mail={userMail} />
                    </div>
                </section>  

            </div>

            <style jsx>{`
            
            .homeMainContent{
                display: grid;
                grid-template-columns: 10% 1fr;
                grid-template-rows: 90%;
                place-content: center;
                height: 100vh;
                padding: 0 20px;
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
            .homeButtonList > button{
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 7px 1px rgba(200, 200, 200, .6);
                border-radius: 100px;
                background: white;
                width: 55px;
                height: 55px;
                padding: 10px;
                margin: 4px 0;
                border: none;
            }
            .homeGuideList{
                background: rgba(255, 255, 255, .25);
                border-radius: 24px;
                box-shadow: 0px 0px 20px rgba(200, 200, 200, .8);
                padding: 35px;
                height: 80%;
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