import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import '../../assests/watch.jpg'
export const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-heading">
          people to work with the time they have rather than against it. Using
          this method, you break your workday into 25-minute chunks separated by
          five-minute breaks. These intervals are referred to as pomodoros. The
          Pomodoro Technique is a time management system that encourages{" "}
        </h1>
     
          <Link to='/todo' className="home-btn">check your tasks</Link>
       
      </div>
      <img
        className="home-clock"
        src="https://cdn-icons-png.flaticon.com/512/109/109613.png"
        alt="clock"
      />
    </div>
  );
};
