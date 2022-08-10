export const TriviaButton = ({ name, onClick }) => {
  return (
    <button className="trivia-button" onClick={onClick}>
      {name}
    </button>
  );
};
