import * as React from "react";

import "./Body.css";
import TodoItems from "../../components/TodoItems/TodoItems";

const TodoList = [
  { content: "An com", isDone: true },
  { content: "Da bong" },
  { content: "Chay bo" },
];

const Body = () => {
  let [valueInput, setValueInput] = React.useState("");
  const [listTask, setListTask] = React.useState(TodoList);
  const [newItem, setNewItem] = React.useState("");

  const addTask = () => {
    if (!valueInput) {
      return;
    }
    valueInput = valueInput.trim();
    if (!valueInput) {
      return;
    }

    setListTask([{ content: valueInput, isDone: false }, ...listTask]);
    setValueInput([newItem]);
  };

  const onItemClicked = (item) => {
    const isDone = item.isDone;
    const index = listTask.indexOf(item);

    setListTask([
      ...listTask.slice(0, index),
      { ...item, isDone: !isDone },
      ...listTask.slice(index + 1),
    ]);
  };

  const onKeyUp = (event) => {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      setListTask([{ content: valueInput, isDone: false }, ...listTask]);
      setValueInput([newItem]);
    }
  };

  return (
    <div className="Body">
      <div className="Input">
        <input
          type="text"
          placeholder="Todo Something"
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          onKeyUp={onKeyUp}
        />
        <i className="fas fa-plus-circle" onClick={addTask}></i>
      </div>
      {listTask.map((item, index) => (
        <TodoItems
          key={index}
          content={item.content}
          isDone={item.isDone}
          clickDoneButton={() => onItemClicked(item)}
        />
      ))}
    </div>
  );
};

export default Body;
