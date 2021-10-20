import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     // setUser(result.user);
            // })
            .finally(() => setisLoading(false));

    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then((result) => {

            }).catch((error) => {

            });
    }

    const creatAccountWithEmail = (Email, Password, name) => {
        return createUserWithEmailAndPassword(auth, Email, Password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setUserName(name);
            })
    }



    const signInUsingEmail = (Email, Password) => {
        return signInWithEmailAndPassword(auth, Email, Password)
        // .then(result => {
        //     // const user = result.user;
        //     // setUser(user);
        // })

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setisLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setisLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setisLoading(false));

    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        creatAccountWithEmail,
        signInUsingEmail

    }
}

export default useFirebase;