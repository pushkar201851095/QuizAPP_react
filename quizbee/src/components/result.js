import React from "react";

const Result = ({score, playAgain})=>(
    <div className="score-board">
        <div className="score">You Scored {score}/5 correct answers! in Pushkar's Quiz</div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
); 

export default Result;