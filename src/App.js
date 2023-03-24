import NavBar from "./Components/NavBar";
import TechPhrases from "./Components/TechPhrases";
import './App.css';
import CorpBuzz from "./Components/CorpBuzz";
import RandomUselessFacts from "./Components/RandomUselessFacts";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/quote-quest/" element={<Home />} />
              <Route path="/quote-quest/tech-savvy-phrases" element={<TechPhrases />} />
              <Route path="/quote-quest/corporate-buzz-words" element={<CorpBuzz />} />
              <Route path="/quote-quest/random-useless-facts" element={<RandomUselessFacts />} />
            </Routes>
          </Router>
          <footer className="mt-auto text-white-50 text-bg-dark pt-3">
            <p>A React based project with simple APIs, by <a href="https://github.com/sagarvadn" target="_blank" rel="noreferrer" className="text-white">@sagarvadn</a>.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
