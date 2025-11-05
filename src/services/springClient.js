const axios = require('axios');
const fs = require('fs');
const path = require('path');

const base = process.env.SPRING_BOOT_BASE_URL || 'http://localhost:8080/api/referees';
const useFallback = (process.env.USE_LOCAL_FALLBACK || 'true').toLowerCase() === 'true';

const client = axios.create({
  baseURL: base,
  timeout: 4000
});

async function getAll() {
  try {
    const res = await client.get('/');
    return res.data;
  } catch (err) {
    console.warn('springClient.getAll fallo:', err.message);
    if (useFallback) {
      const data = fs.readFileSync(path.join(__dirname, '..', 'data', 'referees.json'), 'utf8');
      return JSON.parse(data);
    }
    throw err;
  }
}

async function getById(id) {
  try {
    const res = await client.get(`/${id}`);
    return res.data;
  } catch (err) {
    console.warn('springClient.getById fallo:', err.message);
    if (useFallback) {
      const data = fs.readFileSync(path.join(__dirname, '..', 'data', 'referees.json'), 'utf8');
      const arr = JSON.parse(data);
      return arr.find(r => String(r.id) === String(id));
    }
    throw err;
  }
}

module.exports = { getAll, getById };
