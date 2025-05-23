// Helper functions for working with Prisma queries

/**
 * Returns an object that includes all fields of the LabelElement model except 'size'
 * This is used to avoid the "LabelElement.size does not exist" error after the database schema change
 */
export const getLabelElementSelectFields = () => {
  return {
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
  };
};
