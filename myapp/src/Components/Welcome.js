import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="Apps">
      <header className="App-header">
        <h1>Welcome to the</h1>
        <h1 className="news-app-title">
          NewsHub<span className="app-part">App</span>
        </h1>
        <p className="description-text">
          The NewsHub is your premier source for the latest news and insights.
          Featuring a sleek and intuitive interface, it offers seamless access
          to a broad spectrum of news articles, ensuring you stay well-informed.
          From breaking news and world events to technology trends and lifestyle
          stories, the NewsHub keeps you connected. Join us today and stay ahead
          of the news curve!
        </p>
        <div className="button-container">
          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            REGISTER
          </button>
          <button className="login-button" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </div>
      </header>
    </div>
  );
}

export default Welcome;
