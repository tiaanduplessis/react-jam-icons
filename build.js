const fs = require('fs')
const path = require('path')

const componentFiles = fs.readdirSync(path.join(__dirname, 'src', 'icons'))

fs.writeFileSync(path.join(__dirname, 'src', 'index.js'), '', 'utf-8')

componentFiles.forEach(file => {
    const name = file.replace('.js', '')
    const exportString = `export { default as ${name} } from './icons/${name}';\r\n`
    fs.appendFileSync(path.join(__dirname, 'src', 'index.js'), exportString, 'utf-8')
})
