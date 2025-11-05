const express = require('express');
const cors = require('cors');
const refereesRouter = require('./routes/referees');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/referees', refereesRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/health', (req, res) => res.json({ ok: true }));

module.exports = app;
