/**
 * Préfixe un chemin d'asset public avec le basePath de déploiement.
 *
 * next/image n'ajoute PAS le basePath aux `src` passés sous forme de chaîne
 * (contrairement aux imports statiques). Sur GitHub Pages le site est servi
 * sous "/<nom-du-repo>/", donc les chemins "/assets/..." doivent être préfixés
 * manuellement. En local, NEXT_PUBLIC_BASE_PATH est vide → aucun changement.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
