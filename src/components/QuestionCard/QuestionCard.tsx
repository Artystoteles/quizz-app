import React from "react";
import "./QuestionCard.css";
import { AnswerObject } from "../../App/App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
  correctAnswer: string;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
  correctAnswer,
}) => {
  console.log(correctAnswer);
  console.log(answers);
  return (
    <div className="questionCard">
      <p className="questionCard__number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p
        className="questionCard__question"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div>
        {answers.map((answer) => (
          <div key={answer} className="questionCard__answerContainer">
            <button
              className="questionCard__answerBtn"
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span
                className="questionCard__answerText"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
