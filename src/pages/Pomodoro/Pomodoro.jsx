import React from "react";
import { PomodoroTimer } from "../../components/index";
import { PomodoroDescription } from "../../components/index";
import './Pomodoro.css'
export const Pomodoro = () => {
  return (
    <div className="pomodoro">
      <PomodoroTimer />
      <PomodoroDescription/>
    </div>
  );
};
