import Image from "next/image"
import { authUserGithub } from "@/app/libs/auth-libs"
import Link from "next/link"
const Dashboard = async () => {
    const userProfile = await authUserGithub()
    // if (!userProfile) {
    //     redirect('/')
    // }
    
    return (
        <div className="p-5">
            <div className="flex flex-col justify-center items-center gap-5 py-8">
                <h3 className="text-warnaku-secondary font-semibold text-2xl">Selamat datang di dashboard-Nya {userProfile?.name} </h3>
                <Image src={userProfile?.image} width={200} height={200} alt=".."
                    className="rounded-[30px]"
                />
                <div className="flex gap-5">
                    <Link href={"/auth/collection"} className="p-3 bg-warnaku-accent text-warnaku-primary rounded-[18px] font-medium">My Collection</Link>
                    <Link href={"/auth/comment"} className="p-3 bg-warnaku-accent text-warnaku-primary rounded-[18px] font-medium">My Comments</Link>
                </div>
            </div>
        </div>
    )
}
export default Dashboard