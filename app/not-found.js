"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
const NotFound = () => {
    const router = useRouter()
    return (
        <section className="p-4">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex justify-center flex-col gap-5 text-center ">
                    <FileSearch size={106} className="text-warnaku-other text-3xl font-bold mx-12"/>
                    <h1 className="text-warnaku-accent font-bold text-xl">404 NOT FOUND</h1>
                    <button onClick={() => router.back()} className=""><button className="bg-warnaku-accent rounded-2xl p-3 text-warnaku-primary hover:bg-[#C0392B] hover:underline transition-all">Back to Home</button></button>
                </div>
            </div>
        </section>
    )
}
export default NotFound