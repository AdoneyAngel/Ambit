import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//APIs
import getUsers from '../db/functions/getUsers'
import getCookie from '../functions/getCookie'
import getUserProfile from '../db/functions/getUserProfile'

export default function App({ Component, pageProps }) {

  getUsers()

  const [userProfile, setUserProfile] = useState({
    name: "",
    mail: ""
  })

  const routerData = useRouter()

  useEffect(() => {
    if(!userProfile.name || !userProfile.mail){
      if(!getCookie("userMail")){
        console.log("User is not logged")
        routerData.push("/login/signup")

      }else{

        getUserProfile(getCookie("userMail"))
        .then(res => {

          const userProfile = {
            name: res.name,
            mail: res.mail
          }

          setUserProfile(userProfile)

        })
      }
    }
  }, [])

  return <>
    <Component {...pageProps} />
    <style jsx global>{`
    

    .principalHomeDisplay{
      background: rgba(241, 241, 241, 1);
      border-radius: 24px;
      box-shadow: 0px 0px 20px rgba(200, 200, 200, .8);
      padding: 35px;
      height: 80%;
    }
    .principalMain{
      display: grid;
      place-content: center;
      height: 100vh;
      padding: 0 20px;
    }
    .homeBarButton{
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

    `}</style>
    
    </>
}