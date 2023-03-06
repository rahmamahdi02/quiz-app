import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);

    const loadData = () => {
        fetch('http://localhost:8080/api/hardcodequizinfo')
          .then((response) => response.json())
          .then(
            (data) => {
              console.log(data);
    
              setQuizInfo(data);
            }
          );
      };
    
      useEffect(() => {
        loadData();
      }, []);

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions.length}
            </div>
            {questions.map((question, index) => {
                return <QuestionCard key={index} question={question} />
            })}
        </div>
    )

}

export default Game;
