const xlsx = require('xlsx');

const file = xlsx.readFile('./CopyofRépartitiondesveilles-ClasseADev.xlsx')
// console.log(file);

// console.log(Object.keys(file));  // Récupérer un array toutes les clés de cet objet file
// console.log(file.SheetNames);  // Récupérer un array toutes les clés de cet objet file
// console.log("FILE SHEETS",file.Sheets.C12);  // Récupérer un array toutes les clés de cet objet file

// workbook = {
//     SheetNames:['A', "B", "C", "D"],
//     Sheets: {
//         A:{},
//         B:{}
//     }
// }

const sheetName = file.SheetNames[0];
const ws = file.Sheets[sheetName];
const file_in_json = xlsx.utils.sheet_to_json(ws);

// console.log("WS",ws);
// console.log(sheetName);
console.log(file_in_json);
