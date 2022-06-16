import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";

const HomePage = () => {
    return(
        <div className="w-full h-screen bg-cyan-50">
            <Navbar/>
            <div className="flex flex-col pl-2 mt-5 border-2">
                <div className="flex flex-row">
                    <p className="text-2xl font-semibold text-cyan-900 underline">Bienvenue sur mon portfolio !</p>
                </div>
                <div className="flex flex-row">
                    <p className="text-xl">Je m'appelle Clément Legros, </p>
                </div>
                <div className="flex flex-row">
                    <p className="text-lg">Développeur Web Junior</p>
                </div>
            </div>
            <div className="flex flex-col pl-2">
                <Button
                    text="En apprendre plus sur moi !"
                    link="/about"
                />
            </div>
        </div>
    )
}

export default HomePage;