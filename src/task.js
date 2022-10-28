import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      {task.description}
      <button
        className="button"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Task;
