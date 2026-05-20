import { spawn } from 'node:child_process';

function envPort() {
  const raw = process.env.PORT;
  if (!raw) return null;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

const port = envPort();

// If PORT is unset, use 0 to ask the OS for a free ephemeral port.
// Next.js accepts -p 0 and will bind to a free port.
const portArg = port == null ? '0' : String(port);

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  [ 'next', 'dev', '-p', portArg ],
  {
    stdio: 'inherit',
    env: process.env,
    shell: false,
  }
);



child.on('exit', (code) => {
  process.exit(code ?? 0);
});

