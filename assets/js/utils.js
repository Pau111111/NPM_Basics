//Ejecutar con Ctr+Alt+N (Extensión de VS)
//Ejecutar el código desde el script
var myModule = require('./module');
var moment = require('moment');
const now = new Date();

console.log("My Module: " + myModule.y());
console.log("MomentJS: " + moment.now());