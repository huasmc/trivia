import { Row } from "react-bootstrap";

const Card = ({ question }) => {
  return (
    <div className="quiz-question-container">
      <Row className="home-description">
        {question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
      </Row>
    </div>
  );
};

export default Card;
