// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;



// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //Tenemos que copiar la segunda cadena de conexión de Azure
    urlDB = 'mongodb://node:LPi7nMl0vtznOVozphb1Nozlm4BJyWQhyz5JWpAIJHjNnDwqyzXPRSqm7kakLXPfUeruesoGs5EdarKtOtLusA%3D%3D@node.documents.azure.com:10255/?ssl=true';
}

process.env.URLDB = urlDB;