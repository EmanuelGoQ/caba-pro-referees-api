const springClient = require('../services/springClient');
const s3 = require('../services/s3Service');

async function listReferees(req, res) {
  try {
    const referees = await springClient.getAll();
    const enriched = referees.map(r => ({
      ...r,
      imageUrl: r.imageKey ? s3.getPublicUrl(r.imageKey) : null
    }));
    res.json(enriched);
  } catch (err) {
    console.error('Error listReferees:', err.message || err);
    res.status(502).json({ error: "Error al obtener árbitros" });
  }
}

async function getReferee(req, res) {
  try {
    const id = req.params.id;
    const r = await springClient.getById(id);
    res.json({
      ...r,
      imageUrl: r.imageKey ? s3.getPublicUrl(r.imageKey) : null
    });
  } catch (err) {
    console.error('Error getReferee:', err.message || err.response?.data || err);
    res.status(502).json({ error: "Error al obtener árbitro" });
  }
}

module.exports = { listReferees, getReferee };
