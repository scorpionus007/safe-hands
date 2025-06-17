import { spawn } from 'child_process';

// Simple frontend-only server that runs Vite
const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

vite.on('close', (code) => {
  console.log(`Vite server exited with code ${code}`);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
});