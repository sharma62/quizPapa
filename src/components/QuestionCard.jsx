import React, { useEffect, useState } from 'react'

function QuestionCard({ currentQuestion, callback, index }) {

    const [selectedOption, setSelectedOption] = useState("");
    const options = currentQuestion.options

    function handleSubmit() {
        callback(selectedOption)
    }
    return (
        <div className="container mt-5">
            <div className="card shadow p-3">
                <div className="card-body">
                    <h4 className="card-title mb-4">Q {index + 1}. {currentQuestion.question}</h4>

                    {options.map((opt, index) => (
                        <div className="form-check mb-2" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="quizOption"
                                id={`option${index}`}
                                value={opt}
                                checked={selectedOption === opt}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor={`option${index}`}>
                                {opt}
                            </label>
                        </div>
                    ))}

                    <button
                        className="btn btn-primary mt-3"
                        disabled={!selectedOption}
                        // onClick={() => alert(`You selected: ${selectedOption}`)}
                        onClick={handleSubmit}
                    >
                        Submit Answer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
