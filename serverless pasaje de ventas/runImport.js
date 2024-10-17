import { extraFunctionImport } from "./extraFunctionImport.js";

export async function handler(context) {
    return { result: extraFunctionImport("OK"), context, env: process.env }
}
