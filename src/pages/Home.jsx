import React from 'react'
import Input from '../components/Input'
import Btn from '../components/Btn'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-md-12 '>
                    <h1 className='text-info '>I have <span className='text-danger'>fear</span> to take challange ! means you are ready. . . 30s remeaning  </h1>
                </div>
            </div>
            <div className="row p-3">
                <Input />
            </div>
            <div className="row p-3">
                <Link to={'/quiz'}  >
                    <Btn name={"Accecpted"} />
                </Link>
            </div>

        </div>
    )
}

export default Home
