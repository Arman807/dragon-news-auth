import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebaseconfig';
export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userkiace=()=>{
        const unSubscribe=onAuthStateChanged(auth,(user)=>{
            setUser(user);
        })
        return unSubscribe();
    }
    const signingOut=()=>{
        return signOut(auth);
    }
    const authInfo={createUser,signIn,signingOut,user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;