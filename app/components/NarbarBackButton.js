"use client"
import { CaretLeft } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NavbarBackButton = () => {
    const router = useRouter()
    return (
        <>
            <div className="flex gap-4 items-center">
                <button onClick={() => router.back()}><CaretLeft size={24} /></button>
                <Link href={"/"} className="text-2xl font-bold">Animeku</Link>
            </div>
        </>
    )
}
export default NavbarBackButton