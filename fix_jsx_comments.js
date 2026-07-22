import fs from 'fs';
import path from 'path';

function fixCommentsInDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      fixCommentsInDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Replace HTML comments with JSX comments
      const fixed = content.replace(/<!--\s*([\s\S]*?)\s*-->/g, '{/* $1 */}');
      if (fixed !== content) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
        console.log(`Fixed comments in: ${entry.name}`);
      }
    }
  }
}

fixCommentsInDir('C:/Users/swaran/.gemini/antigravity-ide/scratch/aim-cutting-tools/src');
console.log("JSX comment cleanup completed.");
