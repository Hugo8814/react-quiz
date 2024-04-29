function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to readyeact Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">lets start</button>
    </div>
  );
}

export default StartScreen;
