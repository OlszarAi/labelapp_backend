
const path = require("path");
const fs = require("fs");
const controllerPaths = [
  path.join(__dirname, "..", "dist", "controllers", "projectController.js"),
  path.join(__dirname, "..", "dist", "controllers", "labelController.js")
];

// Process each file
controllerPaths.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  // Read the file
  let content = fs.readFileSync(filePath, "utf8");

  // Replace all references to `elements: true` with explicit selection
  content = content.replace(/elements:\s*true/g, 
    "elements: { select: { id: true, type: true, x: true, y: true, width: true, height: true, fontSize: true, value: true, color: true, rotation: true, properties: true, labelId: true, createdAt: true, updatedAt: true } }");

  // Write the file back
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log("Fix applied to controller files");

