const stringParser = (string) => {
  return string
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&A/g, "ä");
};

export default stringParser;
