const { Reservation } = require("../models/models");
const ApiError = require("../error/ApiError");

class ReservationController {
  /*async getAll(req, res) {
    const reservation = await Reservation.findAll();
    return res.json(reservation);
  }*/
  async getAll(req, res) {
    const reservation = await Reservation.findAll({
      where: { towns_id: "18" },
    });
    return res.json(reservation);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const reservation = await Reservation.destroy({ where: { id: id } });
    return res.json(reservation);
  }

  async create(req, res, next) {
    try {
      const { day, hours, master_id, towns_id } = req.body;
      const reservation = await Reservation.create({
        day,
        hours,
        master_id,
        towns_id,
      });
      return res.json(reservation);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAvailable(req, res, next) {
    try {
      const { towns_id } = req.body;
      let availability = await Reservation.findAll({
        where: { towns_id: towns_id },
      });
      return res.json(availability);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ReservationController();
