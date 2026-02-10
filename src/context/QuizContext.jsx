import { createContext, useReducer } from "react";
import question from '../data/questions.json'
export const QuizContext = createContext()
const initialState = {
    user: '',
    index: 0,
    score: 0,
    completed: false,
    question: question
}
function quizReducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, user: (action.payload.trim() ) }
        // ye payload dispatch ke via page send karta  hai
        case "ANSWER":
            return {
                ...state,
                score: action.payload ? state.score + 1 : state.score,
                index: state.index + 1,
            }
        case "FINISH":
            return {
                ...state,
                completed:action.payload
            } 
        case "RESET":
             return {
                ...initialState,
                question:state.question
             }
        default:
            return state;
    }

}
export default function QuizProvider({ children }) {
    const [state, dispatch] = useReducer(quizReducer, initialState)
    return (
        <QuizContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizContext.Provider>
    )
}