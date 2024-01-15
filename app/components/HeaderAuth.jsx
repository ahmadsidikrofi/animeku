"use client"
import { Cursor } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
const HeaderAuth = ({ titleHeader }) => {
    const route = useRouter()
    return ( 
        <div className="flex justify-between items-center">
            <button onClick={() => route.back()} ><Cursor className="text-xl font-thin" size={24} /></button>
            <h3 className="text-warnaku-accent text-2xl font-semibold">{titleHeader}</h3>
        </div>
    );
}
 
export default HeaderAuth;