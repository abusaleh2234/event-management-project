import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Provider/AuthContext";


const Navbar = () => {

    const {User,logout} = useContext(AuthProvider)

    // console.log(User);

    const hendelLogOut = () => {
        logout()
    }

    const Navelinks = <>
        <li><NavLink to="/" className="text-lg font-semibold">Home</NavLink></li>
        <li><NavLink to="/gallery" className="text-lg font-semibold">Gallery</NavLink></li>
        <li><NavLink to="/ccontuct" className="text-lg font-semibold">Contuct</NavLink></li>
        <li><NavLink to="/login" className="text-lg font-semibold">Login</NavLink></li>

    </>
    return (
        <div className="bg-pink-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navelinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn normal-case text-xl">Event Experts</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navelinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        User?.email ? <div className="flex items-center gap-4">
                            <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={User?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a>{User?.displayName}</a></li>
                            <li><a>Logout</a></li>
                        </ul>

                    </div>
                    <button onClick={hendelLogOut} className="btn" >LogOut</button>
                        </div> : <Link to="/login" className="btn">Login</Link>
                    }
                    

                    {/* {
                    user ?  : onClick={hendelLogOut}
                    
                } */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;