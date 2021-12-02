import React, { useEffect, useContext } from 'react';
import {Context as AuthContext} from '../context/AuthContext';


// execute tryLocalSignin once when this component is called.

const ResolveAuthScreen = () => {
    const {  tryLocalSignin } = useContext(AuthContext);
    // execute tryLocalSignin just once  when this component begin
    useEffect(()=>{
       tryLocalSignin() ;
    },[])

    return null;
}


export default ResolveAuthScreen;