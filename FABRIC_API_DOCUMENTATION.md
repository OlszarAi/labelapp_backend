# Fabric Editor Backend API Documentation

## Overview
This document describes the backend API structure implemented for the new Fabric.js editor operations. The API provides complete CRUD operations for Fabric projects, canvases, and objects.

## API Endpoints

### Fabric Projects
Base URL: `/api/fabric/projects`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/` | Get all fabric projects for authenticated user |
| GET    | `/:id` | Get specific fabric project by ID |
| POST   | `/` | Create new fabric project |
| PUT    | `/:id` | Update fabric project |
| DELETE | `/:id` | Delete fabric project |

**Create Project Payload:**
```json
{
  "name": "My Label Project",
  "description": "Project description (optional)",
  "icon": "project-icon-url (optional)"
}
```

### Fabric Canvas
Base URL: `/api/fabric/canvas`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/:id` | Get canvas with all objects |
| POST   | `/` | Create new canvas |
| PUT    | `/:id` | Update canvas properties |
| DELETE | `/:id` | Delete canvas |
| POST   | `/:id/duplicate` | Duplicate canvas with all objects |

**Create Canvas Payload:**
```json
{
  "name": "Canvas Name",
  "width": 100,
  "height": 50,
  "unit": "mm",
  "background": "#ffffff",
  "projectId": "project-uuid",
  "metadata": {}
}
```

### Fabric Objects
Base URL: `/api/fabric/objects`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/canvas/:canvasId` | Get all objects for specific canvas |
| GET    | `/:id` | Get specific object by ID |
| POST   | `/` | Create new object |
| PUT    | `/:id` | Update object properties |
| DELETE | `/:id` | Delete object |
| POST   | `/bulk` | Bulk operations (create/update/delete) |

**Create Object Payload:**
```json
{
  "type": "text",
  "canvasId": "canvas-uuid",
  "left": 10,
  "top": 20,
  "width": 100,
  "height": 30,
  "text": "Sample Text",
  "fontFamily": "Arial",
  "fontSize": 16,
  "fill": "#000000"
}
```

**Bulk Operations Payload:**
```json
{
  "operations": [
    {
      "action": "create",
      "data": { /* object data */ }
    },
    {
      "action": "update",
      "id": "object-uuid",
      "data": { /* update data */ }
    },
    {
      "action": "delete",
      "id": "object-uuid"
    }
  ]
}
```

## Authentication
All endpoints require authentication via JWT token in cookies. The API will return:
- `401 Unauthorized` if no token is provided
- `404 Not Found` if resource doesn't exist or user doesn't have access

## Data Models

### FabricProject
- `id`: UUID primary key
- `name`: Project name
- `description`: Optional description
- `icon`: Optional icon URL
- `userId`: Owner user ID
- `canvases`: Associated canvases
- `createdAt`, `updatedAt`: Timestamps

### FabricCanvas
- `id`: UUID primary key
- `name`: Canvas name
- `width`, `height`: Canvas dimensions
- `unit`: Measurement unit (mm, px, in)
- `background`: Background color
- `projectId`: Parent project ID
- `objects`: Canvas objects
- `version`: Canvas version number
- `metadata`: Additional properties as JSON

### FabricObject
- `id`: UUID primary key
- `type`: Object type (text, qrcode, uuid, shape, image)
- `canvasId`: Parent canvas ID
- Position: `left`, `top`, `width`, `height`
- Transform: `scaleX`, `scaleY`, `angle`
- Styling: `fill`, `stroke`, `strokeWidth`, `opacity`
- Text properties: `text`, `fontFamily`, `fontSize`, `fontWeight`, `fontStyle`, `textAlign`
- Special properties: `qrValue`, `uuidLength`, `qrErrorLevel`
- Layer: `zIndex`, `locked`, `visible`
- `metadata`: Custom properties as JSON

## Error Responses
All endpoints return consistent error responses:
```json
{
  "message": "Error description",
  "error": "Detailed error information (in development)"
}
```

## Implementation Notes
1. All operations are properly authorized - users can only access their own data
2. Database relationships use cascading deletes for data integrity
3. Bulk operations are wrapped in database transactions
4. Object z-index is automatically managed for proper layering
5. Canvas duplication preserves all object properties and relationships

## Testing
The API can be tested using curl or any HTTP client:

```bash
# Health check (no auth required)
curl -X GET http://localhost:3001/api/health

# Test authentication (should return 401)
curl -X GET http://localhost:3001/api/fabric/projects
```

For authenticated requests, include the JWT token in cookies or use a tool like Postman with proper session management.
