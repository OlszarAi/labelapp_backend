// Fix project and label controllers to avoid TypeScript errors
// This script runs before build to ensure compatibility with the database schema

const fs = require('fs');
const path = require('path');

console.log('Updating controller files to ensure compatibility with the database schema...');

// Paths to controller files
const projectControllerPath = path.join(__dirname, '..', 'src', 'controllers', 'projectController.ts');
const labelControllerPath = path.join(__dirname, '..', 'src', 'controllers', 'labelController.ts');

// Helper function to update controller files
function fixController(filePath) {
  console.log(`Processing ${filePath}...`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // The pattern to match select clauses with fontSize
  const selectPattern = /elements:\s*{\s*select:\s*{[^}]*fontSize:\s*true[^}]*}\s*}/g;
  
  // Replace with simple include
  content = content.replace(selectPattern, 'elements: true');
  
  // Write the updated content back
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// Fix controllers
fixController(projectControllerPath);
fixController(labelControllerPath);

console.log('Controller files updated successfully.');
