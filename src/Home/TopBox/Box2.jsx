import { useEffect } from "react"
import "../../index.css"
import cloud from "../../assets/cloud.svg"
export default function Box2({content}){
  
    switch(content){
        case 'sun':
            return <div>
                <img src={cloud} alt=""/>
            </div>
            break
        case "1":
            return <div>
                ddqd
            </div>
        case "2":
            return <div>
                qdqdqd
            </div>
        case "3":
            return <div>
                ddqd
            </div>
        case "4":
            return <div>
                jljlddqd
            </div>
        
    }
}