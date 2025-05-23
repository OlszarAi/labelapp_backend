/* direct-fix.js - Force database schema to match current Prisma schema */
const fs = require('fs');
const path = require('path');

// The path to the controller files
const controllersDir = path.join(__dirname, 'src', 'controllers');
console.log(`Looking for controllers in ${controllersDir}`);

// Helper function to update a controller file to use include instead of select for elements
function fixControllerFile(filePath) {
  console.log(`Fixing controller file: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all elements: { select: ... } with elements: true
  content = content.replace(/elements:\s*{\s*select:\s*{[^}]*}}/g, 'elements: true');
  
  // Replace all elements: true with elements: true - no more field selection to avoid type errors
  fs.writeFileSync(filePath, content);
  
  console.log(`Fixed ${filePath}`);
}

// Process all controller files
fs.readdirSync(controllersDir).forEach(filename => {
  if (filename.endsWith('Controller.ts')) {
    fixControllerFile(path.join(controllersDir, filename));
  }
});

console.log('Executing SQL commands to fix database schema...');
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('Error fixing database schema:', error);
    console.error(stderr);
    return;
  }
  console.log('Database schema fixed successfully:');
  console.log(stdout);
  
  // Now run prisma generate to update client
  console.log('Regenerating Prisma client...');
  exec('npx prisma generate', (error, stdout, stderr) => {
    if (error) {
      console.error('Error regenerating Prisma client:', error);
      console.error(stderr);
      return;
    }
    console.log('Prisma client regenerated successfully:');
    console.log(stdout);
  });
});

