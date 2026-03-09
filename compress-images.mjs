import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const imagesDir = './public/images';

const files = readdirSync(imagesDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  
  const inputPath = join(imagesDir, file);
  const stat = statSync(inputPath);
  
  console.log(`Compressing: ${file} (${(stat.size / 1024).toFixed(0)}KB)`);
  
  await sharp(inputPath)
    .jpeg({ quality: 75, progressive: true })
    .toFile(inputPath + '.tmp');
  
  // Replace original
  const { renameSync } = await import('fs');
  renameSync(inputPath + '.tmp', inputPath);
  
  const newStat = statSync(inputPath);
  console.log(`Done: ${file} → ${(newStat.size / 1024).toFixed(0)}KB`);
}

console.log('\n✅ All images compressed!');