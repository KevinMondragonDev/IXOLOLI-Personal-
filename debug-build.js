const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'build-debug.log');
const out = fs.openSync(logFile, 'w');

console.log('Starting build. Output will be in build-debug.log');

const child = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['ng', 'build'], {
  cwd: __dirname,
  shell: true,
  env: process.env,
  stdio: ['ignore', out, out]
});

child.on('error', (err) => {
  fs.writeSync(out, `ERROR: ${err.message}\n`);
  fs.closeSync(out);
  process.exit(1);
});

child.on('close', (code) => {
  fs.writeSync(out, `\nEXIT_CODE: ${code}\n`);
  fs.closeSync(out);
  console.log('Build finished. Exit code:', code);
  process.exit(0);
});
