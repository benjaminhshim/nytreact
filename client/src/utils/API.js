import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(bookData) {
    return axios.post("/api/articles", bookData);
  },
  // Gets all videos
  getVideos: function() {
    return axios.get("/api/videos");
  },
  // Gets the video with the given id
  getVideo: function(id) {
    return axios.get("/api/videos/" + id);
  },
  // Deletes the video with the given id
  deleteVideo: function(id) {
    return axios.delete("/api/videos/" + id);
  },
  // Saves a video to the database
  saveVideo: function(bookData) {
    return axios.post("/api/videos", bookData);
  }
};
