import { useState } from 'react';
import './App.css';
import questions from './questions.json';

function App() {

  const[qstart,setQstart]=useState(false);
  const[curQIndex,setCurQIndex]=useState(0);
  const[selectedans,setSelectedans]=useState(null);
  const[correct,setCorrect]=useState(null);
  const[score,setScore]=useState(0)

  const handleStart=(e)=>{
    e.preventDefault();
    setQstart(true);
  }

  const handleNextQuestion=()=>{
    setCorrect(null);
    setSelectedans(null);
    setCurQIndex((prevIndex) => prevIndex + 1);
  }

  const handleAnsClick=(option)=>{
    if(selectedans !== null){return;}

    setSelectedans(option);
    if(option === questions[curQIndex].answer){
      setCorrect(true);
      setScore(prevScore=>prevScore+1);}
    else{setCorrect(false);}
  }

  const handleRestart=()=>{
    setQstart(false);
    setCurQIndex(0);
    setCorrect(null);
    setSelectedans(null);
    setScore(0);
  }

  return (
    <>
      <video autoPlay muted loop className='start-bg'>
        <source src="bg.mp4" type='video/mp4'/>
      </video>
      {!qstart && (
        <button className='start' onClick={handleStart}>Get started</button>
        )
      }
      {qstart && (
        <div className='container'>
          {curQIndex<questions.length ? (
            <div className='wrapper'>
              <div className='question-wrapper'>
                  <h3>{questions[curQIndex].question}</h3>
                  <ul>
                    <li onClick={()=>handleAnsClick(questions[curQIndex].optionA)}>{questions[curQIndex].optionA}</li>
                    <li onClick={()=>handleAnsClick(questions[curQIndex].optionB)}>{questions[curQIndex].optionB}</li>
                    <li onClick={()=>handleAnsClick(questions[curQIndex].optionC)}>{questions[curQIndex].optionC}</li>
                    <li onClick={()=>handleAnsClick(questions[curQIndex].optionD)}>{questions[curQIndex].optionD}</li>
                  </ul>
                </div>
                {correct !== null && (
                  <p className={correct ? 'result correct' : 'result incorrect'}>{correct ? 'Correct' : 'Incorrect'}</p>
                )}
                {curQIndex < questions.length && correct!== null && (
                  <button onClick={handleNextQuestion} className='next'>Next Question</button>
                )} 
            </div>
          ) :  (
            <div className='scorecard'>
              <h1>Game over!</h1>
              <p>Your final score : {score} out of {questions.length}</p>
              <button className='restart-btn' onClick={handleRestart}>Restart</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default App
