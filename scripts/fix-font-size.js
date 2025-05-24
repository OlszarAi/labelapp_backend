// Script to fix fontSize handling in labelController.ts
const fs = require('fs');
const path = require('path');

// Path to the file
const filePath = path.join(__dirname, '..', 'src', 'controllers', 'labelController.ts');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Replace the fontSize assignment in both create and update methods
content = content.replace(
  /fontSize: isTextElement \? element\.size : null,/g, 
  'fontSize: isTextElement ? (element.fontSize || properties.fontSize || 12) : null,'
);

// Write the file back
fs.writeFileSync(filePath, content);

console.log('Fixed fontSize handling in labelController.ts');
