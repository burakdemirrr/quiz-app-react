import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAmount, handleScore } from '../reducer';


const Score = () => {
  const {score}=useSelector(state=>state.question);
  const dispatch=useDispatch();
  const history=useNavigate();
  const handleBack= (e)=>{
    e.preventDefault();
  
    dispatch(handleScore(0));
    dispatch(handleAmount(10));
    history("/");
  }


  return <div className="final">
    <h1>Final Score : {score}</h1>
    <button onClick={handleBack}>Play Again!</button>
  </div>;
};

export default Score;
