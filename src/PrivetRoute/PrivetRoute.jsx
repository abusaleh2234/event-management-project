import { useContext } from "react";
import { AuthProvider } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Looding from "../component/Looding/Looding";
import PropTypes from 'prop-types';


const PrivetRoute = ({children}) => {

    const {User, looding} = useContext(AuthProvider)
    const location = useLocation()

    // console.log(looding);

    if(looding) {
        // return <h1 className="text-5xl text-center">looding</h1>
        return <Looding></Looding>
    }

    if(User){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivetRoute.propTypes = {
    children:PropTypes.object.isRequired
}
export default PrivetRoute;