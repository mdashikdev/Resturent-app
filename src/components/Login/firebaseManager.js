import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut } from "firebase/auth";
import {auth} from './firebase.config';

export const createUserWithEmailAndPass = (email,password) => {

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential.user;
      })
      .catch((error) => {
        return error.message;
    });
}

export const updateName = (name) => {
    return updateProfile(auth.currentUser, {
            displayName: name, photoURL: ""
        }).then(() => {
            return 'updated';
        }).catch((error) => {
            return error.message;
        });
}

export const loginUser = (email,pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                return userCredential.user;
            })
            .catch((error) => {
                 return error.message;
            });
}

export const logOut = () => {
   return signOut(auth).then(() => {
            return 'Log Out'
        }).catch((error) => {
            return error.message
        })
}