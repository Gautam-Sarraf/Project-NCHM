const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

walkDir(path.join(__dirname, 'app'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace white utility classes with text-light
    content = content.replace(/(text|bg|border)-white(?=\/| |"|'|`|$|\]|\})/g, '$1-text-light');
    
    // Replace hex #0B1F3B with background utility classes, but ONLY for bg, from, via, to
    content = content.replace(/(bg|from|via|to)-\[\#0B1F3B\]/g, '$1-background');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
