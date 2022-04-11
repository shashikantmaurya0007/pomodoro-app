import React from "react";
import "./Task.css";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useTodo } from "../../context/todo-context";

import { useNavigate } from "react-router-dom";
import { useModal } from "../../context/modal-context";
export const Task = () => {
  const { taskAdded, dispatch } = useTodo();
  const { setPomodoroDesc } = useModal();
  const navigate = useNavigate();

  const titleHandler = (title, desc) => {
    navigate("/pomodoro");
    setPomodoroDesc([{ title, desc }]);
  };

  return (
    <div>
      {taskAdded &&
        taskAdded.map((task) => {
          const { id, title, desc } = task;
          return (
            <div className="task" key={id}>
              <div
                className="task-title"
                onClick={() => titleHandler(title, desc)}
              >
                {title}
              </div>
              <div className="task-buttons">
                <MdOutlineDeleteOutline
                  className="task-delete"
                  onClick={() => {
                    localStorage.setItem(
                      "todo_",
                      JSON.stringify(
                        JSON.parse(localStorage.getItem("todo_")).filter(
                          (ele) => ele.id != id
                        )
                      )
                    );
                    dispatch({
                      type: "DELETE_HANDLER",
                      payload: taskAdded,
                      id,
                    });
                  }}
                />

                <MdEdit
                  className="task-edit"
                  onClick={() =>
                    dispatch({ type: "EDIT_HANDLER", payload: task })
                  }
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};
