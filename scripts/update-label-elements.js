#!/usr/bin/env node
/**
 * This script updates all labels in the database to ensure they have the required
 * rotation and properties fields that were added in the schema update.
 * 
 * Usage:
 * node scripts/update-label-elements.js
 */

const { PrismaClient } = require('@prisma/client');

// Initialize Prisma client
const prisma = new PrismaClient();

async function main() {
  console.log('Starting Label Elements update...');

  try {
    // 1. Get all label elements without rotation or properties
    const incompleteElements = await prisma.labelElement.findMany({
      where: {
        OR: [
          { rotation: null },
          { properties: null }
        ]
      },
      select: {
        id: true,
        type: true,
        rotation: true,
        properties: true
      }
    });

    console.log(`Found ${incompleteElements.length} label elements to update`);

    // 2. Update each element to ensure rotation and properties are set
    for (const element of incompleteElements) {
      const updates = {};

      // Add rotation if not present
      if (element.rotation === null) {
        updates.rotation = 0;
      }

      // Add properties if not present
      if (element.properties === null) {
        // Set default properties based on element type
        if (['text', 'uuidText', 'company'].includes(element.type)) {
          updates.properties = {
            bold: false,
            italic: false,
            strikethrough: false,
            fontFamily: 'Arial'
          };
        } else {
          updates.properties = {};
        }
      }

      // Update the element if we have changes
      if (Object.keys(updates).length > 0) {
        await prisma.labelElement.update({
          where: { id: element.id },
          data: updates
        });

        console.log(`Updated element ${element.id} (${element.type}) with:`, updates);
      }
    }

    console.log('Update completed successfully!');
  } catch (error) {
    console.error('Error updating label elements:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the update
main();
