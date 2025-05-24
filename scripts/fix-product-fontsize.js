// Script to fix product element fontSize in existing labels
// This script identifies product elements with null fontSize and fixes them
// by setting fontSize from properties.fontSize or default value 12

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fixProductElementsFontSize() {
  console.log('Starting product element fontSize fix...');
  
  try {
    // Get all label elements of type 'product'
    const productElements = await prisma.labelElement.findMany({
      where: {
        type: 'product'
      }
    });
    
    console.log(`Found ${productElements.length} product elements to check...`);
    
    let fixCount = 0;
    
    // Process each product element
    for (const element of productElements) {
      // Check if fontSize is null but should be set
      if (element.fontSize === null) {
        const properties = element.properties || {};
        const newFontSize = properties.fontSize || 12;
        
        // Update the element with the correct fontSize
        await prisma.labelElement.update({
          where: { id: element.id },
          data: {
            fontSize: newFontSize
          }
        });
        
        console.log(`Fixed element ${element.id}: Set fontSize to ${newFontSize}`);
        fixCount++;
      }
    }
    
    console.log(`Fix complete. Fixed ${fixCount} product elements.`);
    
  } catch (error) {
    console.error('Error fixing product elements:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the fix function
fixProductElementsFontSize();
