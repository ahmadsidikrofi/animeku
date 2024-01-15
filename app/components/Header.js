import Link from "next/link"

const Header = ({ headerTitle, headerLink, headerGetAll }) => {
    return (
        <div className='flex justify-between items-center my-4'>
            <h1 className='text-3xl font-bold py-5'>{headerTitle}</h1>
            {headerLink && headerGetAll ? 
                <Link href={"/daftar-anime"} className='p-2 bg-warnaku-other text-warnaku-primary rounded-[20px] font-bold'>{headerGetAll}</Link>
                : null
            }
        </div>
    )
}

export default Header