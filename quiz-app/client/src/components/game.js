import React, {useState, useRef} from 'react';
import QuestionCard from "./questioncard";
import {decode} from 'html-entities';
import "./game.css";


const Game = () => {
    const [questionData, setQuestions] = useState(null);
    const [toggleQuestion, changeQuestion] = useState(0);
    const [topicData, changeTopic] = useState("general");
    const score = useRef(0);
    const target = useRef();

    decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710;');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/trivia/${topicData}`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Bad response");
            }
        })
        .then((data) => {
            setQuestions(data);
        })
    }

    const handleQuestion = (e) => {
        e.preventDefault();
        target.current.checked = false;
        if(toggleQuestion > -1 && toggleQuestion < 5){
            changeQuestion(toggleQuestion+1);
        } else if (toggleQuestion === 5) {

        }
    }

    const handleChange = (e) => {
        changeTopic(e.target.value);
    }

    const choice = (e) => {
        if(e.target.value === "true"){
            score.current += 1;
            console.log(score.current);
        }
        target.current = e.target;
    }
    console.log(score.current);

    function refreshPage() {
        window.location.reload(false);
      }

    return (
      <div className="Game">
     <p>Score: {(score.current/5)*100}%</p>

        <p style={{fontSize: "15px", }}>Choose Your Subject Below</p>

            <div className="questions">
                <div>
                    { questionData ? questionData  === "404" ? (
                `Invalid`
            ) : (
                <>
                {toggleQuestion < 5 ? (
                    <>
                    <QuestionCard result={questionData.results[toggleQuestion]} choice={choice}/>
                    <form onSubmit={handleQuestion}>
                        <input type="submit" value="NEXT" className="button.submit" onSubmit={handleQuestion} />
                    </form>
                </>
                ) : (
                    <>
                        <p>Did you pass? Try again!</p>
                        <input type="button" value ="Try Again" className="button.submit" onClick={refreshPage} />
                        <div>
                        </div>
                    </>
                )}
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <select name="topic" id="topic" value={topicData} onChange={handleChange}>
                            {/* <option value="general">General Knowledge</option> */}
                            <option value="math">Math</option>
                            <option value="animals">Animals</option>
                            <option value="art">Art</option>
                            <option value="history">History</option>
                        </select><br/>
                        <input type="submit" value="START" className="button.submit" onSubmit={handleSubmit}/>
                    </form><br />
                    
                </>
                )
            }
                </div>
            </div>
        </div>
    )
};

export default Game;