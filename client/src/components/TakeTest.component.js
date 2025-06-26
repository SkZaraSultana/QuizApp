import React from "react";
import styles from "../componentsStyles/Taketest.module.css";
import { useHistory } from "react-router-dom";

function Taketest() {
  let history = useHistory();

  const startQuiz = () => {
    history.push("/test");
  };

  return (
    <div className={styles.pageBackground}>
      <div className={styles.taketest}>
        <h1 className={styles.heading}>Welcome to Zara Sultana's Quiz</h1>
        <p className={styles.subtitle}>
          Click the button below to begin your quiz.
        </p>
        <button onClick={startQuiz} className={styles.buttons}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Taketest;
