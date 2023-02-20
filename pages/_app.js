import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

//APIs
import getUsers from '../db/functions/getUsers'

export default function App({ Component, pageProps }) {

  getUsers()

  const [userAccount, setuserAccount] = useState({
    name: "",
    mail: ""
  })

  const routerData = useRouter()

  useEffect(() => {
    if(!userAccount.name || !userAccount.mail){
      console.log("User is not logged")
      routerData.push("/login/signup")
    }
  }, [userAccount])

  return <Component {...pageProps} />
}