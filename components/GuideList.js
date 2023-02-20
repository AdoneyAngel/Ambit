import getUserAccount from "@/db/functions/getUserAccount";
import Image from "next/image";
import { useEffect, useState } from "react";

import pruebaImagen from "../images/descarga.jpeg"

export default function GuideList ({mail}){
    const [userGuides, setUserGuides] = useState([])

    useEffect(() => {
        getUserAccount(mail)
        .then(res => {
            setUserGuides(res.guides)
        })
    }, [mail])

    return <>
    { userGuides ? userGuides.map(guide => {
        return (
            <div className="guideList-item" key={guide.name}>
                <header>
                    <h1>{guide.name}</h1>
                </header>
                <div className="guideListItemFooter">
                    <p>{guide.date}</p>
                </div>
                <section>
                    <Image className="guideListItemImage" alt="Guide" src={pruebaImagen}/>
                </section>

                <style jsx>{`
                

                .guideList-item{
                    background: white;
                    display: inline-flex;
                    width: 200px;
                    height: 100px;
                    padding: 15px;
                    border-radius: 12px;
                    position: relative;
                    overflow: hidden;
                }
                .guideList-item > header{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgba(195, 195, 195, .7);
                    backdrop-filter: blur(7px);
                    display: block;
                    width: 100%;
                    padding: 10px 15px;
                    z-index: 2;
                }
                .guideList-item > header > h1{
                    font-weight: 400;
                    color: white;
                    letter-spacing: 1px;
                }
                .guideList-item > .guideListItemFooter{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background: rgba(255, 255, 255, .7);
                    backdrop-filter: blur(7px);
                    z-index: 2;
                    padding: 5px 15px;
                    border-top-left-radius: 10px;
                }
                .guideList-item > .guideListItemFooter > p{
                    font-weight: 200;
                    font-size: 15px;
                }
                .guideList-item > section{
                    width: 100%;
                    z-index: 1;
                    background: grey;
                }

                `}</style>



                <style>{`
                
                .guideList-item > section > .guideListItemImage{
                    width: calc(100% + 30px);
                    height: calc(100% + 30px);
                    transform: translate(-15px, -15px);
                    z-index: 1px;
                }
                
                `}</style>

            </div>
        )
    }) : null}
    </>
}