/**
 * @openapi
 * /api/referees:
 *   get:
 *     summary: Lista árbitros (summary)
 *     responses:
 *       200:
 *         description: Lista de árbitros
 *
 * /api/referees/{id}:
 *   get:
 *     summary: Detalle de árbitro
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle árbitro
 */
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/refereesController');

router.get('/', ctrl.listReferees);
router.get('/:id', ctrl.getReferee);

module.exports = router;
