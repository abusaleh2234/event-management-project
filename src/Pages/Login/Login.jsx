import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Provider/AuthContext";

const Login = () => {

    const {userlogin} = useContext(AuthProvider)

    const hendelLogin = (e) => {
        e.preventDefault()

        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email,password);


        userlogin(email,password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="">
                <div className=" bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-6/12 bg-base-100">
                            <div className=" lg:text-left py-10 mx-8 border-b">
                                <h1 className="text-center text-4xl font-bold">Login your account</h1>
                            </div>
                            <form onSubmit={hendelLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className=" px-2 py-3 border outline-0 bg-[#F3F3F3] focus:outline-1" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-lg font-semibold">Password</span>
                                    </label>
                                    <input type="text" name="password" required placeholder="Enter your password" className="px-2 py-3 border outline-0	bg-[#F3F3F3] focus:outline-1" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="text-center pt-4">
                                <p>Do not Have An Account ? <Link to="/register" className="text-red-600 font-bold">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;