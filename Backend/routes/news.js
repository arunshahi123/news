const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const newsFile = path.join(__dirname, "../data/news.json");

// Read JSON File
const readNews = () => {
  try {
    const data = fs.readFileSync(newsFile, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
};

// Write JSON File
const writeNews = (news) => {
  fs.writeFileSync(newsFile, JSON.stringify(news, null, 2));
};

// ===============================
// GET ALL NEWS
// ===============================
router.get("/", (req, res) => {
  const news = readNews();
  res.json(news);
});

// ===============================
// GET SINGLE NEWS
// ===============================
router.get("/:id", (req, res) => {
  const news = readNews();

  const article = news.find(
    (item) => item.id == req.params.id
  );

  if (!article) {
    return res.status(404).json({
      message: "News not found",
    });
  }

  res.json(article);
});

// ===============================
// ADD NEWS
// ===============================
router.post("/", (req, res) => {

  const news = readNews();

  const newArticle = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    image: req.body.image,
    category: req.body.category,
    breaking: req.body.breaking || false,
    source: req.body.source || "Admin",
    date: new Date().toISOString()
  };

  news.unshift(newArticle);

  writeNews(news);

  res.status(201).json({
    message: "News Added Successfully",
    news: newArticle
  });

});

// ===============================
// UPDATE NEWS
// ===============================
router.put("/:id", (req, res) => {

  const news = readNews();

  const index = news.findIndex(
    item => item.id == req.params.id
  );

  if(index === -1){
    return res.status(404).json({
      message:"News Not Found"
    });
  }

  news[index] = {
    ...news[index],
    ...req.body
  };

  writeNews(news);

  res.json({
    message:"News Updated",
    news:news[index]
  });

});

// ===============================
// DELETE NEWS
// ===============================
router.delete("/:id", (req,res)=>{

  const news = readNews();

  const filtered = news.filter(
    item=>item.id != req.params.id
  );

  writeNews(filtered);

  res.json({
    message:"News Deleted Successfully"
  });

});

module.exports = router;