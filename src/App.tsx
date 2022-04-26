import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

/**
 * react-router-dom
 * 
 * path="/" 는 맨 마지막에 배치해야한다!
 * 
 */
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="tv" element={<Tv/>} />
        <Route path="search" element={<Search/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

  );
}

export default App;
