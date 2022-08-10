import { Col, Row } from "react-bootstrap";
import { TriviaButton } from "../Common/TriviaButton";
import { HOME_SCREEN } from "../Common/stringConfig";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <Row className="top-menu-container">
        <h2>{HOME_SCREEN.WELCOME}</h2>
      </Row>
      <Row className="home-description">{HOME_SCREEN.DESCRIPTION}</Row>
      <Row className="home-prompt">{HOME_SCREEN.PROMPT}</Row>
      <Row className="bottom-menu-container">
        <Link to="/quiz">
          <TriviaButton name={HOME_SCREEN.BEGIN} />
        </Link>
      </Row>
    </>
  );
};

export default HomeScreen;
