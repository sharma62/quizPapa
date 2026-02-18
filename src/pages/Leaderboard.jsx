import React from "react";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";

function Leaderboard() {
  const navigate = useNavigate()  
  const leaderboardData = [
    { id: 1, name: "Amit", score: 8 },
    { id: 2, name: "Rahul", score: 7 },
    { id: 3, name: "Neha", score: 6 },
    { id: 4, name: "Priya", score: 5 },
    { id: 5, name: "Suresh", score: 4 },
  ];

  const topRankers = top5(leaderboardData)

  function top5(leaderboardData) {
    console.log("Original Data:", leaderboardData);

    // Copy banaya taki original array change na ho
    const copiedData = [...leaderboardData];
    console.log("Copied Data:", copiedData);

    // Sorting
    copiedData.sort((a, b) => {
      console.log("Comparing:", a, "VS", b);
      console.log("b.score - a.score =", b.score - a.score);

      return b.score - a.score;
    });

    console.log("After Sorting (High Score First):", copiedData);

    // Top 5 extract
    const top5Students = copiedData.slice(0, 5);

    console.log("Top 5 Students:", top5Students);

    return top5Students;
  }
  function onClickToHome() {
    localStorage.clear()
    navigate('/')
  }
  function onClickPlayAgain() {
    // same user start quiz Again
    navigate('/')
  }
  const handleAi = ()=>{
    console.log("handle Ai")
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-9">

          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center fw-bold text-primary mb-4">
              🏆 Top 5 Student
            </h2>

            <div className="table-responsive">
              <table className="table table-bordered table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>

                <tbody>
                  {topRankers.map((user, index) => (
                    <tr key={user.id}>
                      <td className="fw-bold">{index + 1}</td>
                      <td>{user.name}</td>
                      <td className="fw-bold text-success">{user.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <Btn btnName={'Home'} onClick={onClickToHome} color="primary" />
              <Btn btnName={'Play Again'} onClick={onClickPlayAgain} color="warning" />
              <Btn btnName={'Re-View By Ai'} onClick={handleAi} color="success" />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
