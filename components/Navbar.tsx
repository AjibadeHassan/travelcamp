import { NAV_LINKS } from "@/Constants/Index"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="border-2 border-blue-700 flex justify-between items-center  padding-container relative z-30 py-5">
        <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29}/>
        </Link>
        <ul className="hidden lg:flex items-center pl-7  gap-12 h-full">
            {NAV_LINKS.map((link)=>(
                <Link className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold flex justify-center" href={link.href} key={link.key}>
                    {link.label}
                </Link>
            ))}
        </ul>
        <div className="hidden lg:flex">
          <Button 
           type="button"
           title="login"
           icon="/user.svg"
           variant="btn_dark_green"
          />
        </div>
        <Image
        
        className="lg:hidden cursor-pointer"
         src="/menu.svg"
         alt="menu"
         width={32}
         height={32}
         />
    </nav>
  )
}

export default Navbar