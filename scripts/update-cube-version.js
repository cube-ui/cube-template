var fs = require('fs')
var path = require('path')
var version = process.argv[2]

var packagePath = path.resolve(__dirname, '../template/package.json')
var content = fs.readFileSync(packagePath).toString()

content = content.replace(/(?<="cube-ui": "~)\d+\.\d+\.\d+(?=")/, version)

fs.writeFileSync(packagePath, content)