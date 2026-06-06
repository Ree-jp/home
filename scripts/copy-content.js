import { readdirSync, cpSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const postsDir = 'content/posts';
const staticDir = 'static/blog';

if (!existsSync(postsDir)) {
  console.log('content/posts not found, skipping');
  process.exit(0);
}

for (const slug of readdirSync(postsDir)) {
  const srcDir = join(postsDir, slug);
  const destDir = join(staticDir, slug);
  mkdirSync(destDir, { recursive: true });

  for (const file of readdirSync(srcDir)) {
    if (!file.endsWith('.md')) {
      cpSync(join(srcDir, file), join(destDir, file));
    }
  }
}

console.log('content images copied!');
