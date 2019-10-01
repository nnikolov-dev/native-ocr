const fs = require('fs')
const path = require('path')

const envLoc = path.join(process.cwd(), '.env')

if (process.env.NODE_ENV !== 'production' && fs.existsSync(envLoc)) {
	const env = fs.readFileSync(envLoc).toString()
	env.split('\n').filter(Boolean).forEach((line) => {
		const [key, val] = line.split('=', 1)
		process.env[key] = val
		// add logger here
	})
}
