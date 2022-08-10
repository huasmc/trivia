import React from "react";
import "./App.css";
import HomeScreen from "./features/HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./features/Quiz/Quiz";
import Results from "./features/Results/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
