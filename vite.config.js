import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'child_process';

// Get the current directory of the config file
const __dirname = dirname(fileURLToPath(import.meta.url));


let branch = '';
try {
  // This command gets the current branch name
  branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (err) {
  console.error('Could not determine the git branch, defaulting to "landing-page.html".', err);
}

export default defineConfig({
  root: resolve(__dirname, 'src/pages'),
  server: {
    open: branch+'.html',
  }
});