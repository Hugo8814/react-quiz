function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥳";
  if (percentage > 50 && percentage < 100) emoji = "😎";
  if (percentage < 50) emoji = "😔";
  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
        {emoji}
      </p>
      <p className="highscore">(Highscore {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
