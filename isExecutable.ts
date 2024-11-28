import { fileURLToPath } from "node:url"


export function isExecutable(): boolean {
    const scriptPath = fileURLToPath(import.meta.url)
    return scriptPath.includes("bun")
}

