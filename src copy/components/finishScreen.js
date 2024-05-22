function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  index,
  numQuestions,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥳";
  else if (percentage > 50 && percentage < 100) emoji = "😎";
  else emoji = "😔";

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">(Highscore {highscore} points)</p>
      {index === numQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "Restart" })}
        >
          Restart
        </button>
      )}
    </>
  );
}

export default FinishScreen;
