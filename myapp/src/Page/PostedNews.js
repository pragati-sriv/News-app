import React from "react";
import { useNavigate } from "react-router-dom";
import { useNews } from "../Components/NewsContext";
import "./PostedNews.css";

const PostedNews = () => {
  const { news, deleteNews } = useNews();
  const navigate = useNavigate();

  return (
    <div className="posted-news-container">
      <h2>Posted News</h2>
      {news.length === 0 ? (
        <div>
          <p>No posted news available</p>
          <button onClick={() => navigate("/add-news")}>Add News</button>
        </div>
      ) : (
        <div className="news-list">
          {news.map((newsItem) => (
            <div key={newsItem.id} className="news-item">
              <h3>{newsItem.title}</h3>
              <p>{newsItem.description}</p>
              <p>{newsItem.content}</p>
              <div className="news-meta">
                <span>Posted By: {newsItem.postedBy}</span>
                <span>On: {newsItem.date}</span>
              </div>
              <div className="news-buttons">
                <button
                  onClick={() => deleteNews(newsItem.id)}
                  className="delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostedNews;
