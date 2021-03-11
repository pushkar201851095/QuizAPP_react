import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizSrvice from "./quizService";

class QuizBee extends Component {
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
            </div>

        );
    }
}

ReactDOM.render(<QuizBee/>,document.getElementById("root"));