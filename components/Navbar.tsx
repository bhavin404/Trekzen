'use client'
import { NAV_LINKS } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [menuPopup, setMenuPopup] = useState(false)

    const onChangeMenuPopup = ()=>{
        setMenuPopup(!menuPopup)
    }

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100}/>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>
       {menuPopup &&  <ul className={`border  flex flex-col pop-up-menu gap-4 lg:hidden `}>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="bold-16 py-4 text-gray-100 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul>}
       

        <div className="lg:flexCenter hidden">
            <Button 
            type="button"
            title="Log in"
            icon="/user.svg"
            variant="btn_dark_green"
            />
        </div>
        {menuPopup ?  <Image
        onClick={onChangeMenuPopup}
        src="black-close.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />: <Image
        onClick={onChangeMenuPopup}
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        />}
       
        

    </nav>
  )
}

export default Navbar