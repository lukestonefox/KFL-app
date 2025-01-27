import { Link } from "react-router-dom"
import { LogOut } from "lucide-react"

export default function Header() {

    return (
        <>
            <header className="backdrop-blur-lg bg-black/10">
                <nav className="flex justify-between w-full p-4">
                    <div className="w-full">
                        <Link to="/home">
                            <img src="src\assets\KFL.svg" title="nuts" className="w-[5%]"></img>
                        </Link>
                    </div>
                    <div className="flex items-center text-white gap-x-4">
                        <Link to="/login" className="px-4 py-2 duration-200 rounded-md hover:bg-white/20">Login</Link>
                        <Link to="/polls" className="px-4 py-2 duration-200 rounded-md hover:bg-white/20">Polls</Link>
                        <Link to="/trades" className="px-4 py-2 duration-200 rounded-md hover:bg-white/20">Trades</Link>
                        <div className="cursor-pointer">
                            <LogOut color="white" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
};