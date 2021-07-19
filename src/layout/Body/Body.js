import * as React from "react";

import "./Body.css";
import TodoItems from "../../components/TodoItems/TodoItems";

const LIST_TASK = "listTask";

const Body = () => {
  let [valueInput, setValueInput] = React.useState("");
  const [listTask, setListTask] = React.useState([]);
  const [newItem, setNewItem] = React.useState("");
  const [isInput, setIsInput] = React.useState(false);

  React.useEffect(() => {
    const list = localStorage.getItem(LIST_TASK);
    if (list) {
      setListTask(JSON.parse(list));
    }
  }, []);

  const onItemClicked = (item) => {
    const isDone = item.isDone;
    const index = listTask.indexOf(item);

    const list = [
      ...listTask.slice(0, index),
      { ...item, isDone: !isDone },
      ...listTask.slice(index + 1),
    ];
    localStorage.setItem(LIST_TASK, JSON.stringify(list));
    setListTask(list);
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

      const list = [{ content: valueInput, isDone: false }, ...listTask];
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
      setValueInput([newItem]);
    }
  };

  const deleteItemHandler = (item) => {
    const index = listTask.indexOf(item);

    listTask.splice(index, 1);
    const list = [...listTask.slice(0, index), ...listTask.slice(index)];
    localStorage.setItem(LIST_TASK, JSON.stringify(list));
    setListTask(list);
  };

  const handleOnClick = () => {
    console.log("handleOnClick");
    if (valueInput.trim()) {
      const list = [{ content: valueInput, isDone: false }, ...listTask];
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
      setValueInput([newItem]);
    }
  };

  const saveItemHandler = (item, e) => {
    const index = listTask.indexOf(item);
    const list = listTask;

    // list.splice(index, 1, {
    //   content: inputValueEdit,
    //   isDone: listTask[index].isDone,
    // });
    // localStorage.setItem(LIST_TASK, JSON.stringify(list));
    // setListTask(list);
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
        <i className="fas fa-plus-circle" onClick={handleOnClick}></i>
      </div>
      {listTask.length ? (
        listTask.map((item, index) => (
          <TodoItems
            key={index}
            content={item.content}
            isDone={item.isDone}
            clickDoneButton={() => onItemClicked(item)}
            clickDeleteButton={() => deleteItemHandler(item)}
            saveItem={() => saveItemHandler(item)}
          />
        ))
      ) : (
        <div className="Nothing">Nothing Here!!!</div>
      )}
    </div>
  );
};

export default Body;
