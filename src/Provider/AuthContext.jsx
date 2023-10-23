import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";


export const AuthProvider = createContext(null)
const AuthContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

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
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // Logout
    const logout = () => {
        setLooding(true)
        return signOut(auth)

    }




    const authentication = {
        creatUser,
        userlogin,
        logout,
        googleLogin,
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