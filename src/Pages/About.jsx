import Navbar from "../Components/Navbar";


const About = () => {

    const CalculAge = () => {
        let age = (bdate, now = new Date(), then = new Date(bdate)) => now.getFullYear() - then.getFullYear() - (now < new Date(now.getFullYear(), then.getMonth(), then.getDate()));
        return age("2001-04-17");
    }

    return(
        <div className="h-screen w-full">
            <Navbar />
            <div className="flex flex-col">
                <div className="flex flex-row">
                    Je m'appelle Clément Legros, <br/>
                    J'ai {CalculAge()} ans, <br/>
                    et je suis à la recherche de mon premier emploi en tant que développeur front end ReactJS.
                    J'ai effectué une licence pro PRISM (Progrmmation Internet et systèmes mobiles)
                    C'est au cours de cette année que j'ai découvert ReactJS et que j'en suis tombé sous le charme.
                    En parralèle du front end, je me suis aussi lancé de l'apprentisage Back end avec NodeJS.
                </div>
            </div>
        </div>
    )
}

export default About;