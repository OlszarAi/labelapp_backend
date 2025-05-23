// Test script to verify the fixes for the LabelElement.size issue
const axios = require('axios');

const API_URL = 'http://localhost:3001';

// Test user credentials
const TEST_USER = {
  email: 'admin@labelapp.com',
  password: 'test1234'
};

async function testGetProjects() {
  try {
    // Get a JWT token first (assuming you have a test user)
    const loginRes = await axios.post(`${API_URL}/api/users/login`, TEST_USER);
    
    const token = loginRes.data.token;
    
    // Try to get projects with the token
    const projectsRes = await axios.get(`${API_URL}/api/projects`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    console.log('✅ Projects retrieved successfully:');
    console.log(`Got ${projectsRes.data.length} projects`);
    
    // Check if any projects have elements
    const projectsWithElements = projectsRes.data.filter(
      p => p.labels?.some(l => l.elements?.length > 0)
    );
    
    if (projectsWithElements.length > 0) {
      console.log(`Found ${projectsWithElements.length} projects with labels and elements`);
    } else {
      console.log('No projects with labels and elements found');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error testing projects API:');
    console.error(error.response ? error.response.data : error.message);
    return false;
  }
}

async function testCreateLabel() {
  try {
    // Get a JWT token first
    const loginRes = await axios.post(`${API_URL}/api/users/login`, TEST_USER);
    
    const token = loginRes.data.token;
    
    // Try to create a label with elements
    const labelData = {
      name: "Test Label with FontSize",
      width: 300,
      height: 200,
      elements: [
        {
          type: 'text',
          x: 50,
          y: 50,
          width: 100,
          height: 30,
          fontSize: 16, // Using fontSize instead of size
          value: 'This is a test text',
          color: '#000000',
          rotation: 0,
          properties: {
            bold: true,
            italic: false,
            fontFamily: 'Arial'
          }
        },
        {
          type: 'qrCode',
          x: 150,
          y: 100,
          width: 100,
          height: 100,
          value: 'https://example.com',
          color: '#000000',
          rotation: 0,
          properties: {}
        }
      ]
    };
    
    // Get a project to add the label to
    const projectsRes = await axios.get(`${API_URL}/api/projects`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (projectsRes.data.length === 0) {
      console.error('No projects found to add label to');
      return false;
    }
    
    const projectId = projectsRes.data[0].id;
    
    // Add label to project
    const labelRes = await axios.post(
      `${API_URL}/api/projects/${projectId}/labels`,
      labelData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('✅ Label created successfully:');
    console.log('Label ID:', labelRes.data.id);
    
    return true;
  } catch (error) {
    console.error('❌ Error testing label creation:');
    console.error(error.response ? error.response.data : error.message);
    return false;
  }
}

async function runTests() {
  try {
    console.log('Running tests to verify fixes for LabelElement.size issue...');
    console.log('----------------------------------------------------');
    
    console.log('\nTESTING: Fetching projects with labels and elements');
    const projectsOk = await testGetProjects();
    
    console.log('\nTESTING: Creating a label with text elements using fontSize');
    const labelOk = await testCreateLabel();
    
    console.log('\nTEST RESULTS:');
    console.log('----------------------------------------------------');
    console.log('Fetching projects:', projectsOk ? '✅ PASSED' : '❌ FAILED');
    console.log('Creating label with text elements:', labelOk ? '✅ PASSED' : '❌ FAILED');
    console.log('----------------------------------------------------');
    
    if (projectsOk && labelOk) {
      console.log('🎉 All tests passed! The LabelElement.size issue has been fixed.');
    } else {
      console.log('⚠️ Some tests failed. Further investigation may be needed.');
    }
  } catch (error) {
    console.error('Test error:', error);
  }
}

runTests();
