const stringToNumber = text => Number(text);

export default answers => {
  if (answers.question_age) answers.question_age = stringToNumber(answers.question_age);
  if (answers.question_income) answers.question_income = stringToNumber(answers.question_income);
  return answers;
};