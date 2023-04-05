import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { taskListAtom } from "./taskListAtom";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const setTaskList = useSetRecoilState(taskListAtom); //data read write both work

  const Navigates = useNavigate();

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddTask() {
    if (inputValue) {
      setTaskList((oldTaskList) => [...oldTaskList, inputValue]);
      setInputValue();
    }
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />

      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={() => Navigates("/task")}>check Task</button>
    </div>
  );
}

export default AddTask;
