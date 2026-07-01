import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

/**
 * Base de connaissances de Poé.
 * Tous les fichiers texte (.md, .markdown, .txt) déposés dans
 * `lib/poe/reference/` — y compris dans des sous-dossiers par produit
 * (ex. reference/auto/, reference/sante-chien-chat/) — sont chargés
 * et injectés dans le contexte de l'agent.
 *
 * Pour enrichir Poé : ajoutez / modifiez des fichiers texte dans ce dossier.
 * Les PDF ne sont pas lus directement : convertissez-les en .md (voir README).
 */
const REF_DIR = join(process.cwd(), "lib/poe/reference");
const TEXT_EXT = [".md", ".markdown", ".txt"];

let cached: string | null = null;

function walk(dir: string, acc: string[]): void {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries.sort()) {
    const full = join(dir, name);
    let isDir = false;
    try {
      isDir = statSync(full).isDirectory();
    } catch {
      continue;
    }
    if (isDir) {
      walk(full, acc);
      continue;
    }
    const lower = name.toLowerCase();
    if (lower === "readme.md") continue;
    if (!TEXT_EXT.some((ext) => lower.endsWith(ext))) continue;
    try {
      const content = readFileSync(full, "utf8").trim();
      if (content) acc.push(`### ${relative(REF_DIR, full)}\n${content}`);
    } catch {
      /* ignore unreadable file */
    }
  }
}

function load(): string {
  const acc: string[] = [];
  walk(REF_DIR, acc);
  return acc.join("\n\n");
}

/** Contenu concaténé de la base de connaissances (mis en cache par cold start). */
export function getReference(): string {
  if (cached === null) cached = load();
  return cached;
}
