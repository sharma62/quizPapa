import React, { useContext, useEffect } from "react";
import TimerRange from "../components/TimerRange";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../hooks/useTimer";
import Btn from "../components/Btn";

function Quiz() {
  const { state, dispatch } = useContext(QuizContext);
  const { index, question, completed } = state;
  const navigate = useNavigate();
  console.log(index)
  // Timer hook
  const { time, reset } = useTimer(15);

  // ✅ If quiz completed
  useEffect(() => {
    if (index >= question.length && !completed) {
      dispatch({ type: "FINISH", payload: true });
      navigate("/result");
    }
  }, [index, question.length, dispatch, navigate, state.completed]);

  // ✅ Auto move when time is 0 (skip)
  useEffect(() => {
    if (time === 0 && index < question.length) {
      dispatch({ type: "ANSWER", payload: false });
      reset();
    }
  }, [time, index, question.length, dispatch, reset]);

  // ✅ Submit Answer
  function callback(selectedOption) {
    if (time > 0) {
      dispatch({
        type: "ANSWER",
        payload: selectedOption === question[index].correctAnswer,
      });
      reset();
    }
  }

  // ✅ End Quiz Button
  function endQuiz() {
    if (alert("Are you sure to end the quiz")) {
      dispatch({ type: "FINISH", payload: true });
      navigate("/result");
    }
  }

  // ✅ Prevent crash if index out of range
  if (index >= question.length) {
    return null;
  }

  return (
    <>
      <TimerRange timeOut={time} />

      <div className="container-fluid p-3">
        {/* Progress Bar */}
        <ProgressBar totalQestion={question.length} currIdx={index} />

        {/* End Quiz Button */}
        <div className="d-flex justify-content-end mt-3">
          <Btn btnName={'end Quiz'} onClick={endQuiz} color="danger" />
        </div>

        {/* Question Card */}
        <div className="row mt-3">
          <div className="col-md-12">
            <QuestionCard
              currentQuestion={question[index]}
              callback={callback}
              index={index}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
