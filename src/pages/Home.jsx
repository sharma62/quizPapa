import { useContext, useState } from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import { QuizContext } from '../context/QuizContext'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const { dispatch } = useContext(QuizContext)

    const startQuiz = () => {
        if (!user.trim())return alert(" please enter username")

        dispatch({type:"SET_NAME",payload:user})
        navigate('/quiz')
    }

    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-md-12 '>
                    <h1 className='text-info '>I have <span className='text-danger'>fear</span> to take challange ! means you are ready. . . 30s remeaning  </h1>
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
