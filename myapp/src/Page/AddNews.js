import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNews } from "../Components/NewsContext";
import "./AddNews.css";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { addNews } = useNews();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNewsItem = {
      title,
      description,
      content,
      date: new Date().toISOString().split("T")[0],
    };

    addNews(newNewsItem);
    navigate("/home");
  };

  return (
    <div className="add-news-container">
      <h2>Add News</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => navigate("/home")}>
            Back
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
