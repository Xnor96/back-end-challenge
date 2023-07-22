const axios = require('axios');
const fs = require('fs');
const { countItemsWithAge32 } = require('../utils/countAge32');
const { calculateSHA1Hash } = require('../utils/calculateSHA1Hash');

// Cargar las variables de entorno desde el archivo .env
require('dotenv').config();

// Obtener la URL de la API desde la variable de entorno
const apiUrl = process.env.API_URL;

async function fetchData() {
  try {
    const response = await axios.get(apiUrl); // Utiliza la variable de entorno en lugar de la URL directa
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch data from API');
  }
}

function writeKeysToFile(data) {
  const items = data.split(', ');
  const keys = [];
  for (const item of items) {
    const key = item.split('=')[1];
    if (key && key !== '32') {
      keys.push(key);
    }
  }
  const content = keys.join('\n') + '\n';
  fs.writeFileSync('output.txt', content);
}

async function performBackendChallenge() {
  try {
    const data = await fetchData();
    const count = countItemsWithAge32(data);
    console.log('Number of items with age 32:', count);

    writeKeysToFile(data);

    calculateSHA1Hash('output.txt');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = {
  performBackendChallenge,
};
