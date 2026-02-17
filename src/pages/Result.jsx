import React, { useContext } from 'react'
import Btn from '../components/Btn'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext'

function Result() {
  const user = useContext(QuizContext)
  const { state } = user
  const navigate = useNavigate()
   const handleView = () => {
    navigate('/leaderboard')
  }
  const handleHome = () => {
    localStorage.clear(); 
    navigate('/')
  }
  const handleAi = ()=>{
    
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 p-4 text-center">

            <h2 className="fw-bold text-success mb-3">
              🎉 Quiz Completed!
            </h2>

            <h4 className="mb-2">
              Well done, <span className="fw-bold text-primary text-uppercase">{(state.user)}</span> 👏
            </h4>

            <p className="text-muted mb-3">
              Your Score is
            </p>

            <div className="display-4 fw-bold text-dark mb-4">
              {state.score}
            </div>

            <div className="d-flex justify-content-center gap-3">
              <Btn btnName={"View Leaderboard"} onClick={handleView} />
              <Btn btnName={"Home"} onClick={handleHome} color={"warning"} />
              <Btn btnName={"Re-View By Ai"} onClick={handleAi} color={"success"} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Result
