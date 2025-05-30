import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PlayGame from "./components/PlayGame";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/playgame" element={<PlayGame/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
