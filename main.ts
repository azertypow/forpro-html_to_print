import puppeteer from "npm:puppeteer";

// URL à capturer et fichier de sortie
const url = "https://menus.for-pro.ch/foodCourt_screen";
const outputFilePath = "./screenshot.png";

(async () => {
  // Lance un navigateur headless
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Charge la page
  await page.goto(url, { waitUntil: "networkidle0" });

  await page.emulateMediaType('print')

  await page.setViewport({ width: 1920, height: 1080 });

  // Capture d'écran
  await page.screenshot({
    path: outputFilePath,
    // fullPage: true, // Capture toute la page
  });

  console.log(`Image sauvegardée sous ${outputFilePath}`);

  // Ferme le navigateur
  await browser.close();
})();
