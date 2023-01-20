import "./App.css";
import NavBar from "./components/NavBar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
