import React from "react";
import { useState } from "react";

const Form = ({ addTask }) => {
  const [text, setText] = useState("");
  return (
    <form
      className="add-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) {
          alert("Please add a task");
          return;
        }
        const newId = Math.random() + 3;
        addTask(text, newId);
      }}
    >
      <div className="form-control">
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default Form;
