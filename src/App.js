import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import ErrorMessage from "./components/atoms/ErrorMessage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="pages ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/search" element={<SearchResult />}></Route>
            <Route path="*" element={<ErrorMessage message="404 - Page Not Found" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
