import Header from "../components/header";
import Podium from "../components/podium";

export default function Home() {
    return (
        <>
        <div className="h-screen bg-blue-900">
        <Header />
        <div className="p-4">
            <Podium />
            <img src="src\assets\KFL.svg" title="nuts" className="w-1/3"></img>
            <p className="text-white">kfl</p>
            </div>
            </div>
        </>
    )
}