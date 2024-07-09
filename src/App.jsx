import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Survey from "./pages/Survey/";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
