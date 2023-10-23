import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthContext";
import { Navigate } from "react-router-dom";
import Looding from "../component/Looding/Looding";


const PrivetRoute = ({children}) => {

    const {User, looding} = useContext(AuthProvider)

    console.log(looding);

    if(looding) {
        return <h1 className="text-5xl text-center">looding</h1>
    }

    if(User){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;