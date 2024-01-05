import {Link, NavLink} from "react-router-dom";

export default function HeaderComp(){
    return(
        <header className="w-screen h-16 bg-black/25 flex items-center justify-around">
            <div>
                <h1 className="italic font-mono text-5xl">Form</h1>
            </div>
            <div className="flex justify-end w-50">
                <Link to="/">Home</Link>
            </div>
        </header>
    )
}