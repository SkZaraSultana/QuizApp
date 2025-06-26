import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "../componentsStyles/ScorePage.module.css";

function ScorePage() {
  const location = useLocation();
  const history = useHistory();
  const { score, total } = location.state || { score: 0, total: 0 };

  const handleNext = () => {
    history.push("/abouttest");
  };

  const percent = ((score / total) * 100).toFixed(2);

  return (
    <div className={styles.scoreContainer}>
      <h1>🎉 Quiz Completed!</h1>
      <p>
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>Percentage: <strong>{percent}%</strong></p>
      <button className={styles.button} onClick={handleNext}>Continue</button>
    </div>
  );
}

export default ScorePage;
