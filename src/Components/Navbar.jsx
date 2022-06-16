import { Link } from "react-router-dom";

const Navbar = () => {
        return(
            <nav className="w-full h-16 bg-cyan-900">
                <div className="flex flex-row h-full items-center">
                    <Link className="text-lg" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg> 
                    </Link>
                </div>
            </nav>
        )
}

export default Navbar;