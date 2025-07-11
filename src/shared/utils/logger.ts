const isProduction = process.env.NODE_ENV === 'production'

const ansi = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	underline: '\x1b[4m',
	italic: '\x1b[3m',
	strikethrough: '\x1b[9m',
	colors: {
		reset: '\x1b[0m',
		black: '\x1b[30m',
		red: '\x1b[31m',
		green: '\x1b[32m',
		yellow: '\x1b[33m',
		blue: '\x1b[34m',
		magenta: '\x1b[35m',
		cyan: '\x1b[36m',
		white: '\x1b[37m',
		gray: '\x1b[90m',
	},
}



function log(...args: any[]) {
	if (!isProduction) {
		console.log(`${ansi.colors.gray}[LOG]${ansi.colors.reset}`, ...args)
	}
}

function info(...args: any[]) {
	console.info(`${ansi.colors.green}[INFO]${ansi.colors.reset}`, ...args)
}

function warn(...args: any[]) {
	console.warn(`${ansi.colors.yellow}[WARN]${ansi.colors.reset}`, ...args)
}

function error(...args: any[]) {
	console.error(`${ansi.colors.red}[ERROR]${ansi.colors.reset}`, ...args)
}

function debug(...args: any[]) {
	if (!isProduction) {
		console.debug(`${ansi.colors.cyan}[DEBUG]${ansi.colors.reset}`, ...args)
	}
}

function routes(method: string, path: string) {
	const methodUpper = method.toUpperCase()
	const color = methodColors[methodUpper] || ansi.colors.white
	const lightPurple = `\x1b[38;2;200;120;255m`

	const methodColored = `${color}${methodUpper}${ansi.reset}`
	const routeLabel = `${lightPurple}[ROUTE]${ansi.reset}`

	const pathLink = hyperlink(`${ansi.underline}${ansi.colors.blue}${path}${ansi.reset}`, `http://localhost:3000${path}`)

	console.info(`${routeLabel} ${ansi.bold}${methodColored}${ansi.reset} ${pathLink}`)
}

function routeLog(method: string, path: string, status: number, duration: number) {
	const methodColor = methodColors[method.toUpperCase()] || ansi.colors.white

	const statusColor =
		status < 300 ? ansi.colors.green :
			status < 400 ? ansi.colors.cyan :
				status < 500 ? ansi.colors.yellow :
					ansi.colors.red

	const logLine = `${ansi.colors.magenta}[ROUTE]${ansi.reset} ` +
		`${methodColor}${method.toUpperCase().padEnd(6)}${ansi.reset} ` +
		`${statusColor}${status}${ansi.reset} ` +
		`${ansi.underline}${path}${ansi.reset} ` +
		`${ansi.colors.gray}${duration}ms${ansi.reset}`

	console.log(logLine)
}

export const logger = {
	log,
	info,
	warn,
	error,
	debug,
	routes,
	route: routeLog
}


function hexToAnsi(hex: string): string {
	const rgb = hex.replace('#', '')
	const r = parseInt(rgb.slice(0, 2), 16)
	const g = parseInt(rgb.slice(2, 4), 16)
	const b = parseInt(rgb.slice(4, 6), 16)
	return `\x1b[38;2;${r};${g};${b}m`
}

const methodColors: Record<string, string> = {
	GET: ansi.colors.green,
	POST: ansi.colors.blue,
	PUT: ansi.colors.cyan,
	DELETE: ansi.colors.red,
	PATCH: ansi.colors.magenta,
	WS: ansi.colors.yellow,
	HEAD: ansi.colors.gray,
	OPTIONS: ansi.colors.white,
}

function hyperlink(text: string, url: string): string {
	return `\u001b]8;;${url}\u001b\\${text}\u001b]8;;\u001b\\`;
}

export function formatLog(input: string): string {
	let output = input

	// [text](link)
	output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, text, url) => {
		return hyperlink(`${ansi.underline}${ansi.colors.blue}${text}${ansi.reset}`, `${url}`)
	})

	// #RRGGBB{Example Text}
	output = output.replace(/#([0-9a-fA-F]{6})\{(.*?)\}/g, (_, hex, text) => {
		return `${hexToAnsi(hex)}${text}${ansi.reset}`
	})

	// [color]{Example Text}
	output = output.replace(/\[([a-z]+)\]\{(.*?)\}/gi, (_, color, text) => {
		const colorKey = color.toLowerCase() as keyof typeof ansi.colors
		const code = ansi.colors[colorKey]
		if (!code) return text
		return `${code}${text}${ansi.reset}`
	})


	// __underline__
	output = output.replace(/__(.+?)__/g, (_, text) => `${ansi.underline}${text}${ansi.reset}`)

	// **bold**
	output = output.replace(/\*\*(.+?)\*\*/g, (_, text) => `${ansi.bold}${text}${ansi.reset}`)

	// *italic*
	output = output.replace(/\*(.+?)\*/g, (_, text) => `${ansi.italic}${text}${ansi.reset}`)

	// ~~strikethrough~~
	output = output.replace(/~~(.+?)~~/g, (_, text) => `${ansi.strikethrough}${text}${ansi.reset}`)


	return output
}