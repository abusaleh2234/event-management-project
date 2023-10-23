import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {

    const [User, setUser] = useState()
    const [looding,setLooding] = useState(true)

    // creat user
    const creatUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLooding(false)
          });
        return () => {
            unsubscribe()
        }
    },[])

    // login
    const userlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logout = () => {
        return signOut(auth)

    }




    const authentication = {
        creatUser,
        userlogin,
        logout,
        looding,
        User,
    }
    return (
        <AuthProvider.Provider value={authentication}>
            {children}
        </AuthProvider.Provider>
    );
};
// AuthContext.propTypes = {
//     children:PropTypes.object.isRequired
// }
export default AuthContext;