import React, { useState } from "react";
import "./Modal.css";
import { v4 as uuid } from "uuid";

import { useTodo } from "../../context/todo-context";
import { useModal } from "../../context/modal-context";
export const Modal = () => {
  const { editClicked, dispatch, itemBeingEdited } = useTodo();
  const [title, setTitle] = useState(editClicked ? itemBeingEdited.title : "");
  const [desc, setDesc] = useState(editClicked ? itemBeingEdited.desc : "");

  const { timerLimit, setTimerLimit, breakLimit, setBreakLimit } = useModal();

  const handleSelect = (e) => {
    setTimerLimit((prev) => e.target.value);
  };
  const handleBreak = (e) => {
    setBreakLimit((prev) => e.target.value);
  };

  return (
    <div className="modal">
      <form>
        <input
          type="text"
          placeholder="Add Title"
          className="modal-input modal-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Add Description"
          className="modal-input modal-desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <p className="model-head">time limit</p>
        <select
          value={timerLimit}
          className="modal-limit"
          name="duration"
          id="duration"
          onChange={handleSelect}
        >
          <option value="60">60</option>
          <option value="45">45</option>
          <option value="30">30</option>
          <option value="15">15</option>
        </select>
        <p className="model-head">set break</p>
        <select
          value={breakLimit}
          name="break"
          id="break"
          onChange={handleBreak}
          className="modal-limit"
        >
          <option value="20">20</option>
          <option value="15">15</option>
          <option value="10">10</option>
          <option value="15">5</option>
        </select>
      </form>
      <div className="modal-buttons">
        {editClicked ? (
          <button
            className="modal-btn modal-add"
            onClick={() => {
              localStorage.setItem(
                "todo_",
                JSON.stringify(
                  JSON.parse(localStorage.getItem("todo_")).map((ele) => {
                    console.log(ele);
                    if (ele.id == itemBeingEdited.id) {
                      return {
                        id: itemBeingEdited.id,
                        title,
                        desc,
                        timerLimit,
                        breakLimit,
                      };
                    } else {
                      return ele;
                    }
                  })
                )
              );
              dispatch({
                type: "UPDATE_HANDLER",
                payload: {
                  id: itemBeingEdited.id,
                  title,
                  desc,
                  timerLimit,
                  breakLimit,
                },
              });
            }}
          >
            update
          </button>
        ) : (
          <button
            className="modal-btn modal-add"
            onClick={() => {
              const id_ = uuid();
              localStorage.setItem(
                "todo_",
                JSON.stringify(
                  localStorage.getItem("todo_")
                    ? JSON.parse(localStorage.getItem("todo_")).concat({
                        id: id_,
                        title,
                        desc,
                        timerLimit,
                        breakLimit,
                      })
                    : [].concat({
                        id: id_,
                        title,
                        desc,
                        timerLimit,
                        breakLimit,
                      })
                )
              );

              dispatch({
                type: "ADD_HANDLER",
                payload: { id: id_, title, desc, timerLimit, breakLimit },
              });
            }}
          >
            add
          </button>
        )}

        <button
          className="modal-btn modal-cancel"
          onClick={() => dispatch({ type: "CANCEL_HANDLER" })}
        >
          cancel
        </button>
      </div>
    </div>
  );
};
