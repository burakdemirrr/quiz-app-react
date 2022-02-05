import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { handleScore } from '../reducer';
import {decode} from 'html-entities';
import { CircularProgress } from '@mui/material';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}



const Questions = () => {
  
    const {
        question_category,
        question_amount,
        score
      } = useSelector(state => state.question);

      const history=useNavigate();
      const dispatch=useDispatch();

      console.log(question_category,question_amount,score);

      let apiUrl = `/api.php?amount=${question_amount}`

      const [questionIndex,setQuestionIndex]=useState(0);

      if(question_category){
        apiUrl=apiUrl.concat(`&category=${question_category}`)
      }
     
      const {response,loading}=useAxios({url:apiUrl});
      const [options,setOptions]=useState([]);
      console.log(response);
      
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length), 0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if(loading){
    return(
      <div className="progres">
          <CircularProgress />
      </div>
    )
  }
  const handleClick=(e)=>{
    e.preventDefault();
    const question=response.results[questionIndex];
    if(e.target.textContent===question.correct_answer){
      dispatch(handleScore(score+1))
    }
    if(questionIndex+1<response.results.length){
      setQuestionIndex(questionIndex+1);
    }
    else{
      history("/score");
    }
  }


  return <div className="question">
    <div className="question_inner">
    <h4>Question {questionIndex+1} out of {question_amount}</h4>
    <p>{decode(response?.results[questionIndex].question)}</p>

    {options.map((data,id)=>(
      <div className="button-container" key={id}>
        <button onClick={handleClick} className="quest">{decode(data)}</button>
      </div>
    ))}

  </div>
  </div>;
};

export default Questions;
