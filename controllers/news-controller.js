const NewsService = require("../service/news-service");

class NewsController {
  async create(req, res) {
    try {
      const { title, text, date } = req.body;
      const { picture } = req.files;
      const News = await NewsService.create(
        {
          title,
          text,
          date,
        },
        picture
      );
      res.json(News);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const news = await NewsService.getAll();
      return res.json(news);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const News = await NewsService.getOne(id);
      return res.json(News);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, text, date } = req.body;
      const updatedNews = await NewsService.update(id, {
        title,
        text,
        date,
      });
      return res.json(updatedNews);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const News = await NewsService.delete(id);
      return res.json(News);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
module.exports = new NewsController();
