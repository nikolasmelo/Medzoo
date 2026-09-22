/**
 * Helper to resolve asset URLs correctly respecting Vite's BASE_URL (e.g., GitHub Pages subpath).
 * Automatically strips any local file:/// protocol or OS absolute path prefixes.
 */
export const getAssetUrl = (path: string | undefined | null): string => {
  if (!path) return '';
  
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Sanitização anti-file:///: Remove protocolo local e caminhos absolutos do sistema de arquivos
  let sanitizedPath = path;
  if (sanitizedPath.includes('file:///')) {
    sanitizedPath = sanitizedPath.replace(/^file:\/\/\/[^\/]*\//, '/').replace(/^file:\/\//, '/');
  }
  if (sanitizedPath.includes('/home/melooz/')) {
    sanitizedPath = sanitizedPath.replace(/.*\/public\//, '/');
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const cleanBase = rawBase.replace(/\/$/, '');
  const cleanPath = sanitizedPath.startsWith('/') ? sanitizedPath : `/${sanitizedPath}`;
  
  return `${cleanBase}${cleanPath}`;
};
