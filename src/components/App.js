import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => setQuestionList(questions))
  }, [])

  function updateQuestionList(newQuestion) {
    setQuestionList([...questionList, newQuestion])
  }

  function onDeleteQuestion(questionToDelete) {
    const updatedQuestions = questionList.filter((question) => question.id !== questionToDelete.id)
    setQuestionList(updatedQuestions)
  }

  function onChangeQuestionAnswer(updatedQuestion) {
    const updatedList = questionList.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion
      } else {
        return question
      }
    });
    setQuestionList(updatedList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestionList={updateQuestionList} /> : <QuestionList questionList={questionList} onDeleteQuestion={onDeleteQuestion} onChangeQuestionAnswer={onChangeQuestionAnswer} />}
    </main>
  );
}

export default App;
