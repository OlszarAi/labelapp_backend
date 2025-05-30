#!/usr/bin/env node

/**
 * Script to kill any process running on port 3001
 * Usage: node scripts/kill-port-3001.js
 */

const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function killPort3001() {
  const port = 3001;
  
  try {
    console.log(`🔍 Checking for processes on port ${port}...`);
    
    // Check if port is in use
    const { stdout: pidOutput } = await execAsync(`lsof -ti:${port}`);
    
    if (!pidOutput.trim()) {
      console.log(`✅ Port ${port} is not in use`);
      return;
    }
    
    const pids = pidOutput.trim().split('\n');
    console.log(`⚠️  Found ${pids.length} process(es) using port ${port}:`);
    
    // Get detailed process information
    try {
      const { stdout: processInfo } = await execAsync(`lsof -i:${port} -P -n`);
      console.log('📋 Process details:');
      console.log(processInfo);
    } catch (error) {
      console.log('Could not get detailed process info');
    }
    
    // Kill each process
    for (const pid of pids) {
      if (pid.trim()) {
        console.log(`🔪 Killing process ${pid}...`);
        await execAsync(`kill -9 ${pid.trim()}`);
      }
    }
    
    // Wait a moment and verify
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      const { stdout: checkOutput } = await execAsync(`lsof -ti:${port}`);
      if (checkOutput.trim()) {
        console.log(`⚠️  Warning: Some processes may still be running on port ${port}`);
      } else {
        console.log(`✅ Successfully freed port ${port}`);
      }
    } catch (error) {
      console.log(`✅ Port ${port} is now free`);
    }
    
  } catch (error) {
    if (error.code === 1) {
      // lsof returns code 1 when no processes found - this is normal
      console.log(`✅ Port ${port} is not in use`);
    } else {
      console.error(`❌ Error checking/killing processes on port ${port}:`, error.message);
      process.exit(1);
    }
  }
}

// Run the function
killPort3001().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
