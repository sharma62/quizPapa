import { useContext, useEffect, useState } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import { QuizContext } from '../context/QuizContext'
import { Link, useNavigate } from 'react-router-dom'
import { useTimer } from '../hooks/useTimer'


function Home() {
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const { dispatch } = useContext(QuizContext)
    const { time, reset } = useTimer(45)

    const startQuiz = () => {
        if (!user.trim()) return alert(" please enter Email")

        dispatch({ type: "SET_NAME", payload: user })
        navigate('/quiz')
    }

    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-md-12 '>
                    <h1 className='text-info '>You  <span className='text-danger'>afraid</span> to take challange ! means you are ready. . . {time>0?time + 's remeaning  ':'Page reload'}  </h1>
                </div>
            </div>
            <div className="row p-3">
                <Input name={user} setName={setUser} />
            </div>
            <div className="row p-3">
                <Btn btnName={"Accept"} onClick={startQuiz} />

            </div>

        </div>
    )
}

export default Home
