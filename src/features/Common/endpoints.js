export const quizEndpoint = (
  amount,
  difficulty,
  type
) => `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}
`;
