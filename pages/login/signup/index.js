import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import "../../../styles/login.module.css"
import ambitLetterPng from "../../../images/ambitLetter.png"

//APIs
import getUsers from "@/db/functions/getUsers"
import setUserDoc from '../../../db/functions/setUserDoc'

export default function SignUpPage(){
    const [mail, setMail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleWriting = (e) => {
        if(e.target.name == "name"){
            setUserName(e.target.value)

        }else if(e.target.name == "mail"){
            setMail(e.target.value)

        }else if(e.target.name == "password"){
            setPassword(e.target.value)

        }


    }
    const handleSubmit = async (e) => {
        e.preventDefault()


        setUserDoc(userName, mail, password)
        .then(res => {
            if(!res.created){
                if(res.error === "invalid"){
                    alert("This user mail is invalid")

                }else{
                    alert(`This ${res.error} is already in use`)
                    
                }
            }
        })

    }

    return (
        <main>
            <Image className="loginLogoLetterBackground" src={ambitLetterPng}/>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <section className="loginFormContent">
                        <h1>Sign Up</h1>
                        <input name="name" onChange={(e) => handleWriting(e)} type="text" placeholder="Name"/>
                        <input name="mail" onChange={(e) => handleWriting(e)} type="mail" placeholder="Mail"/>
                        <input name="password" onChange={(e) => handleWriting(e)} type="password" placeholder="Password"/>
                        <Link href="/login/signin" legacyBehavior>
                            <a>Have you an account?</a>
                        </Link>
                    </section>
                    <button>
                        Sign up
                    </button>
                </form>
                <h1 className="loginFormLogoName">AMBIT</h1>
            </div>

            <style jsx>{`
            
            main{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                overflow-y: hidden;
            }
            div{
                display: flex;
                align-items: center;
                padding: 38px;
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(14px);
                max-width: 550px;
                min-width: 500px;
                position: relative;
            }
            form{
                display: flex;
                flex-direction: row;
            }
            form > section{
                display: flex;
                flex-direction: column;
            }
            form > section > h1{
                margin-bottom: 30px;
                font-weight: 800;
                font-size: 17px
            }
            form > section > input{
                background: rgba(255, 255, 255, 0.7);
                padding: 10px 14px;
                border: none;
                border-radius: 7px;
                font-size: 17px;
                margin: 10px 0;
                max-width: 200px
            }
            form > button{
                position: absolute;
                right: 38px;
                bottom: 38px;
                font-size: 17px;
                border: 0 solid var(--principal-color);
                border-radius: 6px;
                padding: 12px;
                font-weight: 800;
                color: var(--principal-color);
                transition: .5s;
                box-shadow: 0px 0px 0px 0px var(--principal-color)
            }
            form > button:hover{
                box-shadow: 0px 0px 10px 1px var(--principal-color)
            }
            .loginFormLogoName{
                position: absolute;
                right: 38px;
                top: 38px;
                font-weight: 800;
                color: #8c5bbe;
                letter-spacing: 2px;
                font-size: 22px
            }
            a{
                text-decoration: none;
                color: #8c5bbe,;
                font-size: 15px;
                margin: 4px 0;
                text-align: right;
                padding-right: 8px;
            }

            `}</style>

            <style>{`

                .loginLogoLetterBackground{
                    position: absolute;
                    top: -53%;
                    right: -10%;
                    width: 70%;
                    height: auto;
                }

            `}</style>
        </main>
    )
}