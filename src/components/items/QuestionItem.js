function QuestionItem(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <p>{props.answer}</p>
    </div>
  );
}

export default QuestionItem;
