import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/task" element={<TaskList />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
