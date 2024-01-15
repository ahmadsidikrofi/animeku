"use client"
import { Dropdown } from "flowbite-react"
import Link from "next/link";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

const AuthButton = ({ name, email, authRoute, authLabel, authUser }) => {
    const DropdownAuth = () => {
        return (
            <>
                <Dropdown label={name}>
                    <Dropdown.Header>
                        <span className="block text-sm font-bold">{name}</span>
                        <span className="block truncate text-sm font-medium">{email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item icon={HiViewGrid}><Link href="/auth/dashboard">Dashboard</Link></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item icon={HiLogout}><Link href={authRoute}>{authLabel}</Link></Dropdown.Item>
                </Dropdown>
            </>
        )
    }
    
    const DropdownNotAuth = () => {
        return (
            <Dropdown label="Click mee">
                <Dropdown.Item icon={HiLogout}><Link href={authRoute}>{authLabel}</Link></Dropdown.Item>
            </Dropdown>
        )
    }
    return ( authUser ? DropdownAuth() : DropdownNotAuth() ) 
}
export default AuthButton