import { useState } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizProvider from './context/QuizContext'
const Home = lazy(() => import('./pages/Home'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Leaderboard = lazy(() => import('./pages/Leaderboard'))
const Result = lazy(() => import('./pages/Result'))

// import Home from './pages/Home'
// import Quiz from './pages/Quiz'
// import Leaderboard from './pages/Leaderboard'
// import Result from './pages/Result'





function App() {
  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <Suspense fallback={<h1 className='text-center mt-5'>Loading. . . </h1>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/quiz' element={<Quiz />} />
              <Route path='/result' element={<Result />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QuizProvider>
    </>
  )
}

export default App
