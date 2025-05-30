import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * Check if a port is in use
 */
export async function isPortInUse(port: number): Promise<boolean> {
  try {
    const { stdout } = await execAsync(`lsof -ti:${port}`);
    return stdout.trim().length > 0;
  } catch (error) {
    // If lsof returns error (exit code 1), it means no process is using the port
    return false;
  }
}

/**
 * Get the PID of the process using a specific port
 */
export async function getProcessUsingPort(port: number): Promise<string | null> {
  try {
    const { stdout } = await execAsync(`lsof -ti:${port}`);
    return stdout.trim() || null;
  } catch (error) {
    return null;
  }
}

/**
 * Kill the process using a specific port
 */
export async function killProcessOnPort(port: number): Promise<boolean> {
  try {
    const pid = await getProcessUsingPort(port);
    if (!pid) {
      return false;
    }

    console.log(`🔪 Killing process ${pid} using port ${port}...`);
    await execAsync(`kill -9 ${pid}`);
    
    // Wait a moment for the process to be killed
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Verify the port is now free
    const isStillInUse = await isPortInUse(port);
    if (isStillInUse) {
      console.log(`⚠️  Warning: Port ${port} is still in use after kill attempt`);
      return false;
    }
    
    console.log(`✅ Successfully freed port ${port}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to kill process on port ${port}:`, error);
    return false;
  }
}

/**
 * Ensure a port is available, killing existing process if necessary
 */
export async function ensurePortAvailable(port: number): Promise<void> {
  const inUse = await isPortInUse(port);
  
  if (!inUse) {
    console.log(`✅ Port ${port} is available`);
    return;
  }

  console.log(`⚠️  Port ${port} is already in use`);
  
  const killed = await killProcessOnPort(port);
  
  if (!killed) {
    console.error(`❌ Failed to free port ${port}. Please manually kill the process or use a different port.`);
    process.exit(1);
  }
}

/**
 * Get process information for a port
 */
export async function getPortProcessInfo(port: number): Promise<string | null> {
  try {
    const { stdout } = await execAsync(`lsof -i:${port} -P -n | grep LISTEN`);
    return stdout.trim() || null;
  } catch (error) {
    return null;
  }
}
