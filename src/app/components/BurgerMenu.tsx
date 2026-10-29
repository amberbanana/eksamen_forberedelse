import { createPortal } from "react-dom"
import Link from "next/link"

const BurgerMenu: React.FC<any> = ({show, onClose}) => {

    if(!show) return null;

    return (
    <>
        {createPortal(
        <>
            <nav className="fixed z-40 w-full h-full p-2 flex flex-col gap-10 bg-emerald-700 text-white text-center">
                <div className="flex justify-between px-4">
                    <h1 className="text-2xl">Website title here</h1>
                    <button aria-label="Close Menu" className="text-2xl cursor-pointer" onClick={onClose}>X</button>
                </div>
                
                <ul className="flex flex-col gap-6 text-xl">
                    <li>
                        <Link href={"/"}>Link 1</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Link 2</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Link 3</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Link 4</Link>
                    </li>
                </ul>
                <div className="text-lg">
                    <button>login</button>
                </div>
            </nav>
        </>,document.body
        )}
    </>
    )
}

export default BurgerMenu
