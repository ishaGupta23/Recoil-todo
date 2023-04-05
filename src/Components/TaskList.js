import React from "react";
import { useRecoilValue } from "recoil";
import { taskListAtom } from "./taskListAtom";

function TaskList() {
  const taskList = useRecoilValue(taskListAtom); // data read value only

  return (
    <div>
      <h2>Task List</h2>
      {taskList.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
}

export default TaskList;
