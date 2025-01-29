import Header from "../components/header";
import Podium from "../components/podium";
import useFetch from "../useFetch";

export default function Home() {
    const {data, loading, error} = useFetch('http://localhost:8080/home');


    if (error) {
        return <p>Error: {error}</p>;
    }
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