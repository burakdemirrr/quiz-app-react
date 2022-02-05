import axios from 'axios';
import React, { useEffect, useState } from 'react';


axios.defaults.baseURL="https://opentdb.com/"
const useAxios = ({url}) => {

    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{

        const axiosData=()=>{
        axios
        .get(url)
        .then((res)=>setResponse(res.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    }

    axiosData();
    },[url])


    return {response,error,loading};
};

export default useAxios;
