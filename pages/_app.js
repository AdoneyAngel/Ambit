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

  return <Component {...pageProps} />
}