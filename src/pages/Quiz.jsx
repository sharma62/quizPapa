import React, { useContext, useEffect } from 'react'
import TimerRange from '../components/TimerRange'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { QuizContext } from '../context/QuizContext'
import { useNavigate } from 'react-router-dom'
import { useTimer } from '../hooks/useTimer'


function Quiz() {
  const { state, dispatch } = useContext(QuizContext)
  const { index, question } = state
  const navigate = useNavigate()

  // for timeRange component
  const { time, reset } = useTimer(15)
  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "ANSWER", payload: false })
      reset()
    } 
  }, [time])
  // for Progress bar component


  // for question component
  function callback(selectedOption) {
    dispatch({ type: "ANSWER", payload: selectedOption === question[index].correctAnswer })
  }
  if (index >= question.length) {
    dispatch({ type: "FINISH", payload: true })
    navigate("/result")
    return null;
  }

  return (
    <>
      <TimerRange timeOut={time} />
      <div className='container-fulid p-3'>
        <ProgressBar />
        <div className='row'>
          <div className="col-md-12">
            <QuestionCard currentQuestion={question[index]} callback={callback} index={index} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
