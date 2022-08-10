import { Col, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, fetchQuiz } from "./QuizSlice";
import Card from "../Card/Card";
import { TriviaButton } from "../Common/TriviaButton";

export const Quiz = () => {
  const quiz = useSelector((state) => state.quiz.questions);
  const dispatch = useDispatch();
  const quizLoaded = useRef(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (!quizLoaded.current) {
      dispatch(fetchQuiz({ amount: 10, difficulty: "hard", type: "boolean" }));
      quizLoaded.current = true;
    }
  }, [quiz]);

  const handleAnswer = async (answer) => {
    const result = {
      question: quiz[activeQuestion].question,
      isCorrect: quiz[activeQuestion].correct_answer.toLowerCase() === answer,
    };
    await dispatch(addAnswer(result));
  };

  const loadNextQuestion = () => {
    let nextQuestion;
    if (activeQuestion < 9) {
      nextQuestion = activeQuestion < 9 ? activeQuestion + 1 : activeQuestion;
      setActiveQuestion(nextQuestion);
    } else {
      history.push("/results");
    }
  };

  return (
    <>
      {quiz.length > 0 && (
        <Row className="top-menu-container">
          <h2>{quiz[activeQuestion].category}</h2>
        </Row>
      )}
      {quiz.length > 0 && <Card question={quiz[activeQuestion].question} />}
      <Row className="quiz-counter">
        {activeQuestion + 1} of {quiz.length}
      </Row>
      <Row style={{ display: "flex", marginTop: "10%" }}>
        <Col xs={6}>
          <TriviaButton name="true" onClick={() => handleAnswer("true")} />
        </Col>
        <Col xs={6}>
          <TriviaButton name="false" onClick={() => handleAnswer("false")} />
        </Col>
      </Row>
    </>
  );
};

export default Quiz;
