const NewsModel = require("../models/news-model");
const fileService = require("./file-service");

class NewsService {
  async create(body, picture) {
    const fileName = fileService.saveFile(picture);
    const createdNews = await NewsModel.create({ ...body, picture: fileName });
    return createdNews;
  }
  async getAll() {
    const news = await NewsModel.find();
    return news;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const News = await NewsModel.findById(id);
    return News;
  }
  async update(id, News) {
    if (!id) {
      throw new Error("id не указан");
    }
    const updatedNews = await NewsModel.findByIdAndUpdate(id, News, {
      new: true,
    });
    return updatedNews;
  }
  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const news = await NewsModel.findByIdAndRemove(id);
    return news;
  }
}
module.exports = new NewsService();
