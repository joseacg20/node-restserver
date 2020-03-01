// =======================
// Puerto
// =======================
process.env.PORT = process.env.PORT || 3000;

// =======================
// Entorno
// =======================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =======================
// Vencimiento del token
// =======================
process.env.CADUCIDA_TOKEN = 60 * 60 * 24 * 30;

// =======================
// SEED de autenticacion
// =======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

// =======================
// Base de Datos
// =======================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
};

process.env.URLDB = urlDB;

// =======================
// Google Client ID
// =======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '948724119676-bptpgqk9uqng38hooboo2a2mp0u0cbpl.apps.googleusercontent.com'