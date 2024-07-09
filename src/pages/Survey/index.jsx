import { useParams } from "react-router-dom"
import Header from "../../components/Header";

function Survey() {
  const { questionNumber } = useParams();
  return (
    <>
    <Header/>
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
    </div>
    </>
  );
}

export default Survey;
