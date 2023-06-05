const EventService = require("../service/event-service");

class EventController {
  async create(req, res) {
    try {
      const { title, text, date, time, address } = req.body;
      const { picture } = req.files;
      const event = await EventService.create(
        {
          title,
          text,
          date,
          time,
          address,
        },
        picture
      );
      res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const events = await EventService.getAll();
      return res.json(events);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.getOne(id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, text, date, time, address } = req.body;
      const updatedEvent = await EventService.update(id, {
        title,
        text,
        date,
        time,
        address,
      });
      return res.json(updatedEvent);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.delete(id);
      return res.json(event);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
module.exports = new EventController();
