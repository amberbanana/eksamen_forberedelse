import Link from "next/link"

const Header = () => {

    //const data = await Data() if the api has the nav items as data

    return (
    <header className="flex">
        <div>
          <Link href={{pathname: "/"}}><h1>Website name here</h1></Link>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <Link href={"*"}>Link 1</Link>
            </li>
            <li>
              <Link href={"*"}>Link 2</Link>
            </li>
            <li>
              <Link href={"*"}>Link 3</Link>
            </li>
            <li>
              <Link href={"*"}>Link 4</Link>
            </li>
          </ul>
        </nav>
        <div></div>
    </header>
  )
}

export default Header
