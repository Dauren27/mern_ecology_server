const EventModel = require("../models/event-model");
const fileService = require("./file-service.js");

class EventService {
  async create(body, picture) {
    const fileName = fileService.saveFile(picture);
    const createdEvent = await EventModel.create({
      ...body,
      picture: fileName,
    });
    return createdEvent;
  }
  async getAll() {
    const events = await EventModel.find();
    return events;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const event = await EventModel.findById(id);
    return event;
  }
  async update(id, event) {
    if (!id) {
      throw new Error("id не указан");
    }
    const updatedEvent = await EventModel.findByIdAndUpdate(id, event, {
      new: true,
    });
    return updatedEvent;
  }
  async delete(id) {
    if (!id) {
      throw new Error("id не указан");
    }
    const event = await EventModel.findByIdAndRemove(id);
    return event;
  }
}
module.exports = new EventService();
