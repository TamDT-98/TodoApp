import React from "react";

import "./TodoItems.css";

function TodoItems(props) {
  const [inputValueEdit, setInputValueEdit] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);
  const [newItem, setNewItem] = React.useState("");
  const [attachedClasses, setAttachedClasses] = React.useState([
    "TodoItems-content",
  ]);

  const onChangeHandler = (e) => {
    setInputValueEdit(e.target.value);
  };

  const clickEditButton = () => {
    setIsEdit(!isEdit);
    if (isEdit == false) {
      attachedClasses.push("slide-out");
    }
  };

  return (
    <div className="TodoItems">
      {isEdit ? (
        <div className="Edit-content ">
          <input
            type="text"
            className="InputContent slide-in"
            placeholder={props.content}
            onChange={onChangeHandler}
            value={inputValueEdit}
          />

          <span className="slide-in">
            <i
              className="fas fa-save"
              onClick={props.saveItem(inputValueEdit)}
            ></i>
            <i
              className="fas fa-undo-alt"
              onClick={() => {
                setIsEdit(null);
                setInputValueEdit([newItem]);
              }}
            ></i>
          </span>
        </div>
      ) : (
        <div className={attachedClasses.join(" ")}>
          <p className={props.isDone ? "TodoItems-Done" : null}>
            {props.content}
          </p>

          <span>
            <i className="fas fa-edit" onClick={() => clickEditButton()}></i>
            {props.isDone ? (
              <i
                className="far fa-check-circle"
                onClick={props.clickDoneButton}
              ></i>
            ) : (
              <i
                className="fas fa-check-circle "
                onClick={props.clickDoneButton}
              ></i>
            )}
            <i
              className="fas fa-times-circle"
              onClick={props.clickDeleteButton}
            ></i>
          </span>
        </div>
      )}
    </div>
  );
}

export default TodoItems;
