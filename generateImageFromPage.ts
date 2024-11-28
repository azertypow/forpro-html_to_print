import type {Browser} from "puppeteer";

export async function generateImageFromPage(browser: Browser, directory: string, url: string) {

    //fichier de sortie
    const outputFileName = `screenshot.png`


    // page
    const page = await browser.newPage()

    // Charge la page
    await page.goto(url, { waitUntil: "networkidle0" })

    await page.emulateMediaType('print')

    await page.setViewport({ width: 1920, height: 1080 })

    const pathToSaveFile = `${directory}/${outputFileName}`

    // Capture d'écran
    await page.screenshot({
        path: pathToSaveFile,
        // fullPage: true, // Capture toute la page
    })

    console.log(`Image sauvegardée sous ${pathToSaveFile}`)
}
