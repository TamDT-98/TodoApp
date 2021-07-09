import React from "react";

import "./TodoItems.css";

function TodoItems(props) {
  return (
    <div className="TodoItems">
      <div className="TodoItems-content">
        <p className={props.isDone ? "TodoItems-Done" : null}>
          {props.content}
        </p>
        <span>
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
    </div>
  );
}

export default TodoItems;
