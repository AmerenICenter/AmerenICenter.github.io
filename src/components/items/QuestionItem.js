function createQuestionItem(item) {
  return <QuestionItem question={item.question} answer={item.answer} />;
}

function QuestionItem(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <p>{props.answer}</p>
    </div>
  );
}
export { createQuestionItem };
export default QuestionItem;
