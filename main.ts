import {isExecutable} from "./isExecutable.ts";

const puppeteer = require("puppeteer") // require for bun compilation
import * as path from "node:path"
import type {Browser} from "puppeteer";
import {generateImageFromPage} from "./generateImageFromPage.ts";


// Récupérer le chemin de l'exécutable
const execPath = isExecutable() ? process.execPath : import.meta.url

// directory path
const execDirectoryPath = isExecutable() ? path.dirname( execPath ) :  path.dirname( new URL(execPath).pathname)
execDirectoryPath.replace('/C:/', '/')
// const execDirectoryPath = "/Users/FoodCourt/Desktop/" //si au dessus ca fonctionne pas sur windows

// Lance un navigateur headless
const browser: Browser = await puppeteer.launch()

await generateImageFromPage(browser, execDirectoryPath + '/1B', "https://menus.for-pro.ch/foodcourt_stations_screens?screen=0")
await generateImageFromPage(browser, execDirectoryPath + '/2B', "https://menus.for-pro.ch/foodcourt_stations_screens?screen=1")
await generateImageFromPage(browser, execDirectoryPath + '/3B', "https://menus.for-pro.ch/foodcourt_stations_screens?screen=2")
await generateImageFromPage(browser, execDirectoryPath + '/4B', "https://menus.for-pro.ch/foodcourt_stations_screens?screen=3")

// Ferme le navigateur
await browser.close()
