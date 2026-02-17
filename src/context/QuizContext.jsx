import { createContext, useEffect, useReducer } from "react";
import question from "../data/questions.json";

export const QuizContext = createContext();

const initialState = {
  user: "",
  index: 0,
  score: 0,
  completed: false,
  question: question,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, user: action.payload.trim() };

    case "ANSWER":
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
        index: state.index + 1,
      };

    case "FINISH":
       return { ...state, completed: action.payload };

    case "RESET":
      return {
        ...initialState,
        question: state.question, // keep questions same
      };

    default:
      return state;
  }
}

// ✅ Safe function to load localStorage
function loadFromLocalStorage() {
  try {
    const storedData = localStorage.getItem("quizStore");
    return storedData ? JSON.parse(storedData) : initialState;
  } catch (error) {
    console.log("LocalStorage data corrupted, resetting...", error);
    return initialState;
  }
}

export default function QuizProvider({ children }) {
  // ✅ Best Practice: Reducer initializer function
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // ✅ Save whenever state changes
  useEffect(() => {
    localStorage.setItem("quizStore", JSON.stringify(state));
  }, [state]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
