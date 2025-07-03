const isProduction = process.env.NODE_ENV === 'production'

const colors = {
	reset: '\x1b[0m',
	gray: '\x1b[90m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
}

function log(...args: any[]) {
	if (!isProduction) {
		console.log(`${colors.gray}[LOG]${colors.reset}`, ...args)
	}
}

function info(...args: any[]) {
	console.info(`${colors.green}[INFO]${colors.reset}`, ...args)
}

function warn(...args: any[]) {
	console.warn(`${colors.yellow}[WARN]${colors.reset}`, ...args)
}

function error(...args: any[]) {
	console.error(`${colors.red}[ERROR]${colors.reset}`, ...args)
}

function debug(...args: any[]) {
	if (!isProduction) {
		console.debug(`${colors.cyan}[DEBUG]${colors.reset}`, ...args)
	}
}

export const logger = {
	log,
	info,
	warn,
	error,
	debug,
}
