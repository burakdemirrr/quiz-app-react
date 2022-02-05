import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAmount, handleCategory } from '../reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';




const Settings = () => {
    const [value,setValue]=useState("");
    const [select,setSelect]=useState("");

    const history=useNavigate();
    const dispatch=useDispatch();

    const {response,error,loading}=useAxios({url:"api_category.php"});
    console.log(response);



   
    if(loading){
            return(
                <div className="progres">
                    <CircularProgress />
                </div>
            )
        }
    if(error){
        return(
            <p>{error}</p>
        )
        }
    const options=response?.trivia_categories;
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(handleCategory(select));

        dispatch(handleAmount(value));

        if(value){
        history("/quest");
        }
        else{
            toast.error("Please Enter An Amount");
        }
        
   }
   


return <form onSubmit={handleSubmit}>
    <ToastContainer/>
<h1>Quiz Game by Burak Demir</h1>
<div className="bottom">
    <h2>Settings</h2>
        <div className="input-container">
        <p>Amount of Question</p>
        <input value={value} onChange={e=>setValue(e.target.value)} />
    </div>
    <div className="select-container">
        <p>Choose A Category </p>
        <select value={select} onChange={e=>setSelect(e.target.value)} >
            {
                options.map(({name,id})=>(
                    <option key={id} value={id}>{name}</option>
                ))
            }
            </select>
    </div>
        <div className="button-container">
            <button className="start">Let's Start</button>
        </div>
    </div>
</form>;
};

export default Settings;
