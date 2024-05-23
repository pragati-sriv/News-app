import React from "react";
import { useNews } from "../Components/NewsContext";
import "./Home.css";

const Home = () => {
  const { news, deleteNews } = useNews();

  const handleDelete = (id) => {
    deleteNews(id);
  };

  return (
    <div className="home-container">
      <h2>Latest News</h2>
      <div className="news-list">
        {news.map((newsItem, index) => (
          <div key={index} className="news-item">
            <h3>{newsItem.title}</h3>
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>
            <div className="news-meta">
              <span>Posted By: {newsItem.postedBy}</span>
              <span>On: {newsItem.date}</span>
            </div>

            <button onClick={() => handleDelete(newsItem.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
