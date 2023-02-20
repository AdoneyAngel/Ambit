import Image from "next/image"
import userLogo from "../images/user.png"

export default function HeaderHome(){
    return (
        <header>
            <section>
                <Image alt="User" width="20" src={userLogo}/>
            </section>

            <style jsx>{`
            
            header{
                display: block;
                position: absolute;
                top: 0;
            }
            
            `}</style>
        </header>
    )
}