import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length > 0 ? (
        <ul className="list">
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Tasks Yet!</div>
      )}
    </div>
  );
};

export default TaskList;
