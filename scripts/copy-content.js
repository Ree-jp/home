import { readdirSync, cpSync, mkdirSync, existsSync, statSync } from 'fs';
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
    if (file.endsWith('.md')) continue;
    const src = join(srcDir, file);
    const dest = join(destDir, file);
    // src と dest がハードリンク等で同一ファイルの場合、cpSync は ERR_FS_CP_EINVAL になる
    if (existsSync(dest) && statSync(src).ino === statSync(dest).ino) continue;
    cpSync(src, dest);
  }
}

console.log('content images copied!');
