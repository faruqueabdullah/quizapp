import { useState } from "react";
import { questions } from "./questionsData";

export default function QuizApp() {
  const [question, setQuestion] = useState(questions);
  const [index, setIndex] = useState(0);
  const [uswerAnswer, setUswerAnswer] = useState([]);

  function handleNextquestion(ans) {
    setIndex(index + 1);
    setUswerAnswer([...uswerAnswer, ans]);
  }

  function resetGame() {
    setIndex(0);
    setUswerAnswer([]);
  }

  return (
    <div className="background">
      <div className="container">
        {index === question.length && (
          <div className="dots">
            <div>
              <span className="green"></span> Correct
            </div>
            <div>
              <span className="red"></span> Wrong
            </div>
          </div>
        )}
        <div className="heading">
          <h2>Quiz App</h2>
          {index === question.length && (
            <h3>
              you scored{" "}
              {uswerAnswer.filter((ans) => ans.isCorrect === true).length} out
              of {question.length}
            </h3>
          )}
        </div>
        {index < question.length && (
          <div>
            <h3 className="question">
              {index + 1}. {question[index].question}
            </h3>
            <ul>
              {question[index].answers.map((ans) => (
                <li onClick={() => handleNextquestion(ans)} key={ans.option}>
                  {ans.option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* // displaying all attempeted questions */}

        {index === question.length && (
          <>
            <div className="result">
              {uswerAnswer.map((option, index) => {
                return (
                  <div key={index}>
                    <div
                      className={`${
                        option.isCorrect === true ? "correct" : "wrong"
                      }`}
                    >
                      {index + 1}. {question[index].question}
                    </div>
                    <div className="answerContainer">
                      <span>
                        <b>your answer :</b> {option.option}
                      </span>{" "}
                      <span className="correct-answer">
                        <b>correct answer :</b>{" "}
                        {
                          question[index].answers.filter(
                            (ans) => ans.isCorrect === true,
                          )[0].option
                        }
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="restart" onClick={() => resetGame()}>
              Restart game
            </button>
          </>
        )}
      </div>
    </div>
  );
}
