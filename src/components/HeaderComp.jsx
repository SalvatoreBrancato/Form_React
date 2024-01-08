import {Link, NavLink} from "react-router-dom";

export default function HeaderComp(){
    return(
        <header className="w-screen h-16 bg-pink-500 flex items-center justify-around">
            <div>
                <h1 className="italic font-mono text-5xl">Form</h1>
            </div>
            <div className="flex justify-end w-50 text-white text-xl">
                <Link to="/" className="border-l-4 border-indigo-500 px-1" >Home</Link>
                <Link className="border-l-4 border-indigo-500 px-1 mx-2" to='/first-form'>Primo form</Link>
            </div>
        </header>
    )
}