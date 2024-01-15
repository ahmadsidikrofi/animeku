import Link from "next/link";
import SearchInput from "./SearchInput";
import { authUserGithub } from "../libs/auth-libs";
import AuthButton from "./AuthButton";
import NavbarBackButton from "./NarbarBackButton";

const Navbar = async () => {
    const authUser = await authUserGithub()
    const name = authUser?.name
    const email = authUser?.email
    const authRoute = authUser ? "/api/auth/signout" : "/api/auth/signin"
    const authLabel = authUser ? "Sign out" : "Sign in"
    // console.log(authUser.name)
    return (
        <div className="bg-warnaku-accent text-warnaku-primary flex justify-between items-center p-4">
            <NavbarBackButton />
            <SearchInput /> 
            <AuthButton name={name} email={email} authRoute={authRoute} authLabel={authLabel} authUser={authUser}/>
        </div>
    )
}

export default Navbar;