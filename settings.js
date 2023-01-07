const fs = require('fs')

global.creator = 'Do I Care' 
global.apikey = ["Do I Care", "Why I Care?", "Why?"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
