#!/usr/bin/env node

/**
 * Enhanced server startup script with port management
 * Usage: node scripts/start-server.js [--force-kill]
 */

const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

async function isPortInUse(port) {
  try {
    const { stdout } = await execAsync(`lsof -ti:${port}`);
    return stdout.trim().length > 0;
  } catch (error) {
    return false;
  }
}

async function getPortProcessInfo(port) {
  try {
    const { stdout } = await execAsync(`lsof -i:${port} -P -n | grep LISTEN`);
    return stdout.trim() || null;
  } catch (error) {
    return null;
  }
}

async function killProcessOnPort(port) {
  try {
    const { stdout } = await execAsync(`lsof -ti:${port}`);
    const pids = stdout.trim().split('\n').filter(pid => pid.trim());
    
    if (pids.length === 0) {
      return false;
    }

    console.log(`🔪 Killing ${pids.length} process(es) using port ${port}...`);
    
    for (const pid of pids) {
      await execAsync(`kill -9 ${pid.trim()}`);
    }
    
    // Wait for processes to be killed
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const isStillInUse = await isPortInUse(port);
    return !isStillInUse;
  } catch (error) {
    return false;
  }
}

async function startServer() {
  const port = 3001;
  const forceKill = process.argv.includes('--force-kill');
  
  console.log('🚀 LabelApp Backend Startup Script');
  console.log('================================');
  
  try {
    // Check if port is in use
    const inUse = await isPortInUse(port);
    
    if (inUse) {
      console.log(`⚠️  Port ${port} is already in use`);
      
      const processInfo = await getPortProcessInfo(port);
      if (processInfo) {
        console.log(`🔍 Current process: ${processInfo}`);
      }
      
      if (forceKill) {
        console.log(`🔧 Force kill enabled, attempting to free port...`);
        const killed = await killProcessOnPort(port);
        
        if (!killed) {
          console.log(`❌ Failed to free port ${port}`);
          console.log(`💡 Try manually killing the process or using a different port`);
          process.exit(1);
        }
        
        console.log(`✅ Port ${port} freed successfully`);
      } else {
        console.log(`❌ Port ${port} is occupied`);
        console.log(`💡 Options:`);
        console.log(`   1. Run: npm run dev:clean (to auto-kill and restart)`);
        console.log(`   2. Run: npm run kill:port (to manually kill processes)`);
        console.log(`   3. Run: node scripts/start-server.js --force-kill`);
        process.exit(1);
      }
    } else {
      console.log(`✅ Port ${port} is available`);
    }
    
    console.log(`🌟 Starting development server...`);
    console.log(`📍 Port: ${port}`);
    console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
    console.log('================================');
    
    // Start the development server
    const server = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true
    });
    
    server.on('error', (error) => {
      console.error(`❌ Failed to start server:`, error);
      process.exit(1);
    });
    
    server.on('exit', (code) => {
      console.log(`\n📊 Server exited with code ${code}`);
      if (code !== 0) {
        console.log(`❌ Server stopped unexpectedly`);
      } else {
        console.log(`✅ Server stopped gracefully`);
      }
    });
    
    // Handle Ctrl+C
    process.on('SIGINT', () => {
      console.log(`\n🛑 Received SIGINT, stopping server...`);
      server.kill('SIGINT');
    });
    
  } catch (error) {
    console.error(`❌ Startup script failed:`, error);
    process.exit(1);
  }
}

startServer();
