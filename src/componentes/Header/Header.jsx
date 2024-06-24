import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <header className="flex bg-deo1 text-white p-4 text-2xl justify-between font-bold ">
            <span>PedroMovies</span>
            <Navbar/>
        </header>
    )
}

export default Header