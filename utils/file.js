import { readdir, stat, readFile } from "node:fs/promises";
import path from "node:path";

export async function listFiles(dir) {
    const items = await readdir(dir, { withFileTypes: true });
    return items
        .filter(f => f.isFile())
        .map(f => ({ label: f.name, value: f.name }));
}

export async function isExistingFile(p) {
    try {
        const s = await stat(p);
        return s.isFile();
    } catch {
        return false;
    }
}

export async function readTextFile(p) {
    try {
        const absolute = path.resolve(p);
        return await readFile(absolute, "utf-8");
    } catch (err) {
        return null;
    }
}

