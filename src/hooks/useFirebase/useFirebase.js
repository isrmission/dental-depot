import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });

    }
    const creatAccountWithEmail = (Email, Password) => {
        createUserWithEmailAndPassword(auth, Email, Password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
        // .catch((error) => {
        //     const errorMessage = error.message;
        // })
    }
    const signInWithEmail = (Email, Password) => {
        signInWithEmailAndPassword(auth, Email, Password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })

    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        creatAccountWithEmail,
        signInWithEmail
    }
}

export default useFirebase;