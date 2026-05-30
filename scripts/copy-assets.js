import { cpSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'assets', 'imgs');
const dest = join(root, 'client', 'public', 'assets', 'imgs');

if (existsSync(src)) {
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
  console.log('Copied assets/imgs → client/public/assets/imgs');
} else {
  console.warn('assets/imgs not found — skip copy');
}
