const puppeteer = require("puppeteer");
// import puppeteer from "puppeteer";
import * as path from "node:path";


// Récupérer le chemin de l'exécutable
// const execPath = import.meta.url;
// const execDirectoryPath = path.dirname( new URL(execPath).pathname);

const execPath = process.execPath;
const execDirectoryPath = path.dirname( execPath );

console.log( execDirectoryPath )

// URL à capturer et fichier de sortie
const url = "https://menus.for-pro.ch/foodCourt_screen";
const outputFilePath = `screenshot${new Date().getTime()}.png`;

// Lance un navigateur headless
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Charge la page
await page.goto(url, { waitUntil: "networkidle0" });

await page.emulateMediaType('print')

await page.setViewport({ width: 1920, height: 1080 });

console.log( execDirectoryPath + '/' + outputFilePath )

// Capture d'écran
await page.screenshot({
  path: execDirectoryPath + '/' + outputFilePath,
  // fullPage: true, // Capture toute la page
});

console.log(`Image sauvegardée sous ${outputFilePath}`);

// Ferme le navigateur
await browser.close();

