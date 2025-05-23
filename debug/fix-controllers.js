
const path = require("path");
const fs = require("fs");
const prismaPath = path.join(__dirname, "..", "dist", "controllers", "projectController.js");

// Read the file
let content = fs.readFileSync(prismaPath, "utf8");

// Remove references to includes that might be accessing the size property
content = content.replace(/elements:\s*true/g, "elements: { select: { id: true, type: true, x: true, y: true, width: true, height: true, fontSize: true, value: true, color: true, rotation: true, properties: true } }");

// Write the file back
fs.writeFileSync(prismaPath, content);

console.log("Fixed projectController.js");

