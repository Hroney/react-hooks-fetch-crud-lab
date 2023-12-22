import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionList, onDeleteQuestion, onChangeQuestionAnswer }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList.map((question) => (
        <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onChangeQuestionAnswer={onChangeQuestionAnswer} />
      ))}</ul>
    </section>
  );
}

export default QuestionList;
