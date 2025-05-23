// Fix all controllers to use explicit field selection for LabelElements
// This script modifies all controller files to avoid the "LabelElement.size" error

const fs = require('fs');
const path = require('path');

const controllerDir = path.join(__dirname, '..', 'src', 'controllers');

const getLabelElementSelectFields = () => {
  return `{
    id: true,
    type: true,
    x: true,
    y: true,
    width: true,
    height: true,
    fontSize: true,
    value: true,
    color: true,
    rotation: true,
    properties: true,
    labelId: true,
    createdAt: true,
    updatedAt: true
  }`;
};

// Process a file to replace "elements: true" with explicit field selection
function processFile(filePath) {
  console.log(`Processing ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Count occurrences before replacement
  const count = (content.match(/elements: true/g) || []).length;
  
  // Replace all occurrences of "elements: true" with explicit field selection
  content = content.replace(/elements:\s*true/g, 
    `elements: { select: ${getLabelElementSelectFields()} }`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Replaced ${count} occurrences in ${filePath}`);
  
  return count;
}

// Process all controller files
fs.readdir(controllerDir, (err, files) => {
  if (err) {
    console.error('Error reading controllers directory:', err);
    return;
  }
  
  let totalReplacements = 0;
  
  files.forEach(file => {
    if (file.endsWith('Controller.ts')) {
      const filePath = path.join(controllerDir, file);
      totalReplacements += processFile(filePath);
    }
  });
  
  console.log(`Total replacements: ${totalReplacements}`);
});
