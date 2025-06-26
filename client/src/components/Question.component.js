import React, { Fragment, useEffect, useState } from "react";
import styles from "../componentsStyles/Question.module.css";
import TestNav from "./TestNav.component";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Question() {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [quesIndex, setQuesIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  const shuffleArray = (array) => {
    if (!Array.isArray(array)) return [];
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    axios.get("/api/test")
      .then((res) => {
        const quizData = res.data.results || [];
        if (quizData.length === 0) {
          setLoading(false);
          return;
        }
        setQuestions(quizData);
        const first = quizData[0];
        const firstOptions = shuffleArray([
          first.correct_answer,
          ...first.incorrect_answers
        ]);
        setOptions(firstOptions);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const current = questions[quesIndex];
      const shuffled = shuffleArray([
        current.correct_answer,
        ...current.incorrect_answers
      ]);
      setOptions(shuffled);
    }
  }, [quesIndex, questions]);

  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [quesIndex]: option });
  };

  const submithandler = () => {
  let score = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.correct_answer) {
      score++;
    }
  });

  history.push("/score", {
    score,
    total: questions.length
  });
};

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading Questions...</h2>;
  if (questions.length === 0) return <h2 style={{ textAlign: "center" }}>No Questions Found</h2>;

  return (
    <Fragment>
      <TestNav mins={5} secs={0} submithandler={submithandler} />
      <div className={styles.qcontainer}>
        {quesIndex + 1}. {questions[quesIndex].question}
      </div>
      <div id="options">
        {options.map((option, index) => {
          const isSelected = answers[quesIndex] === option;
          return (
            <div
              key={index}
              className={isSelected ? styles.containeractive : styles.container}
              onClick={() => handleOptionSelect(option)}
            >
              <input
                className={styles.radios}
                type="radio"
                value={option}
                checked={isSelected}
                onChange={() => handleOptionSelect(option)}
                name="options"
                id={index.toString()}
              />
              <label htmlFor={index.toString()}>
                {String.fromCharCode(65 + index)}. {option}
              </label>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          onClick={() => quesIndex > 0 && setQuesIndex(quesIndex - 1)}
          className={styles.buttons1}
        >
          &#8249;
        </a>
        <a
          onClick={() => quesIndex < questions.length - 1 && setQuesIndex(quesIndex + 1)}
          className={styles.buttons2}
        >
          &#8250;
        </a>
      </div>
    </Fragment>
  );
}

export default Question;
