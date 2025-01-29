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
            <div className="h-screen w-screen bg-slate-800">
                <Header />
                <div className="p-4">
                    <Podium />
                </div>
            </div>
        </>
    )
}