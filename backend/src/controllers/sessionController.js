const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ongs = await connection("ongs").where("id", id).select("name").first();

    if (!ongs) {
      return res.status(400).json({ error: "No ong found with this Id." });
    }

    return res.status(201).json( ongs );
  },
};
