import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import stringParser from "../../utils/stringParser";
import { TriviaButton } from "../Common/TriviaButton";
import { ERRORS, RESULTS_SCREEN } from "../Common/stringConfig";
import { useNavigate } from "react-router-dom";
import { clearQuiz } from "../Quiz/QuizSlice";

const Results = () => {
  const results = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countCorrectAnswers = () => {
    const correctAnswers = results.filter((answer) => answer.isCorrect);
    return correctAnswers.length;
  };

  const playAgain = async () => {
    try {
      const cleared = await dispatch(clearQuiz());
      if (cleared.type === "quiz/clearQuiz") {
        navigate("/");
      } else {
        throw new Error(ERRORS.QUESTIONS_CLEAR);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Row className="top-menu-container">
        <h2>
          You scored {countCorrectAnswers()}/{results.length}
        </h2>
      </Row>
      <div className="results-container">
        <table>
          <tbody>
            {results.map((answer, index) => (
              <tr key={index}>
                <td>
                  <img
                    id="icon"
                    src={answer.isCorrect ? "plus-icon.png" : "minus-icon.png"}
                  />
                </td>
                <td>
                  <span id="result">
                    {answer.question && stringParser(answer.question)}
                  </span>
                </td>
                <td>
                  <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Row className="bottom-menu-container">
        <TriviaButton
          name={RESULTS_SCREEN.PLAY_AGAIN}
          onClick={() => playAgain()}
        />
      </Row>
    </>
  );
};

export default Results;
