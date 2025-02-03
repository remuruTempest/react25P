import { useEffect, useState } from "react";




export default function useFetch(url,options={}){
    
    const [data,setData]=useState(null);
    const [pending,setPEnding]=useState(false);
    const [error,setError]=useState(null);


    async function fetchData() {
        setPEnding(true);

        try{
            const response= await fetch(url, {...options});
            if(!response.ok) throw new Error(response.statusText);

            const result= await response.json();
            setData(result);
            setError(null);
            setPEnding(false);
            

        }catch(e){
            setError(`${e}. Some Error Occure`);
            setPEnding(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[url])

    return {data,error,pending};

}