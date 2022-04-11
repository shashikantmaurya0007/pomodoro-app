import React from "react";
import { useModal } from "../../context/modal-context";
import "./PomodoroDescription.css";
export const PomodoroDescription = () => {
  const { pomodoroDesc } = useModal();
  return (
    <div className="pomo">
      <div className="pomo-container">
        {pomodoroDesc.map((pomo) => {
          return (
            <div className="pomo-container">
              <h1 className="pomo-title">{pomo.title}</h1>
              <p className="pomo-desc">{pomo.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
