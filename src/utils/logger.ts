const isDevelopment = process.env.NODE_ENV === 'development';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
};

function formatMessage(level: string, message: string, meta?: unknown): string {
  const timestamp = new Date().toISOString();
  const color =
    {
      error: colors.red,
      warn: colors.yellow,
      info: colors.blue,
      debug: colors.green,
    }[level] || colors.reset;

  if (isDevelopment) {
    const metaStr = meta ? `\n${JSON.stringify(meta, null, 2)}` : '';
    return `${color}[${timestamp}] [${level.toUpperCase()}]${colors.reset} ${message}${metaStr}`;
  }

  return JSON.stringify({ timestamp, level, message, meta });
}

export const logger = {
  info: (message: string, meta?: unknown) => {
    console.log(formatMessage('info', message, meta));
  },
  error: (message: string, meta?: unknown) => {
    console.error(formatMessage('error', message, meta));
  },
  warn: (message: string, meta?: unknown) => {
    console.warn(formatMessage('warn', message, meta));
  },
  debug: (message: string, meta?: unknown) => {
    if (isDevelopment) {
      console.debug(formatMessage('debug', message, meta));
    }
  },
};
