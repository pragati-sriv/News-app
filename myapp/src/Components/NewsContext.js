import React, { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const userEmail = "user@example.com";

  const addNews = (newsItem) => {
    const newNewsItem = { ...newsItem, id: Date.now() };
    setNews([...news, newNewsItem]);
  };

  const deleteNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews, userEmail }}>
      {children}
    </NewsContext.Provider>
  );
};
