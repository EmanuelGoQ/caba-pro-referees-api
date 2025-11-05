const base = process.env.S3_BASE_URL || 'https://mi-bucket-arbitros.s3.amazonaws.com';

function getPublicUrl(key) {
  if (!key) return null;
  return `${base}/${encodeURIComponent(key)}`;
}

module.exports = { getPublicUrl };
