import { createContext, useEffect, useState } from "react";
import featureFlagServiceCall from "../data";






export const FeaturedFlagContext= createContext(null);

export default function FeaturedFlagGlobalState({children}){

    const [loading,setLoading]=useState(false);
    const [enabledFlags,setEnabledFlags]=useState({});


    async function fetchFeaturedFlags() {
        try{
            setLoading(true);
            //Original service call
            const response =await featureFlagServiceCall();
            setEnabledFlags(response);
            setLoading(false);

        }catch(error){
            console.log(error);
             setLoading(false);
            throw new Error(error)
           
        }
        
    }

    useEffect(()=>{
        fetchFeaturedFlags();
    },[])


    return (
        <FeaturedFlagContext.Provider value={{loading,enabledFlags}}>
             {children}
        </FeaturedFlagContext.Provider>
) 
}