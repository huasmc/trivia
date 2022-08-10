import { Row } from "react-bootstrap";
import stringParser from "../../utils/stringParser";

const Card = ({ question }) => {
  return (
    <div className="quiz-question-container">
      <Row>{stringParser(question)}</Row>
    </div>
  );
};

export default Card;
