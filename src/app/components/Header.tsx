"use client"
import Link from "next/link"
import { useState } from "react"
import BurgerMenu from "./BurgerMenu"
const Header = () => {

    //const data = await Data() if the api has the nav items as data
    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)

    return (
    <>
      <header className="flex h-20 justify-evenly items-center overflow-hidden text-center text-white bg-emerald-700 md:text-xl text-lg">
          <div className="w-1/3">
            <Link href={{pathname: "/"}}><h1>Website name here</h1></Link>
          </div>
          <nav className="w-1/3 sm:block hidden">
            <ul className="flex justify-evenly">
              <li className="hover:bg-emerald-500 py-10 px-3">
                <Link href={"/"}>Link 1</Link>
              </li>
              <li className="hover:bg-emerald-500 py-10 px-3">
                <Link href={"/"}>Link 2</Link>
              </li>
              <li className="hover:bg-emerald-500 py-10 px-3">
                <Link href={"/"}>Link 3</Link>
              </li>
              <li className="hover:bg-emerald-500 py-10 px-3">
                <Link href={"/"}>Link 4</Link>
              </li>
            </ul>
          </nav>
          <div className="w-1/3 sm:block hidden">
            <button className="cursor-pointer">Login</button>
          </div>
          <div className="sm:hidden block">
              <button className="cursor-pointer" onClick={()=> setShowBurgerMenu(true)}>Burger menu</button>
          </div>
      </header>
      <BurgerMenu show={showBurgerMenu} onClose={()=> setShowBurgerMenu(false)} />
    </>
  )
}

export default Header
