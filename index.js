#!/usr/bin/env node
var fs = require('fs'), path = require('path')

function createGuiFromJSON(jsonFile) {
    if(jsonFile.constructor === ({}).constructor) {
        // takes up less space in the main file ^^
        return require('./src/nonMinimalized.js').uiFromJson(jsonFile)
    } else {
        throw new TypeError('\'jsonFile\' parameter must be a json object.')
    }
}

if(process.argv[2] != null) {
    

    var file = process.argv[2]
    console.log('Parsing json from \'' + file + '\'')
    var json = JSON.parse(fs.readFileSync(path.join((process.argv[1], file))))

    fs.writeFileSync(file.replace('.json', '.html'), createGuiFromJSON(json))
    console.log('Saved to \'' + file.replace('.json', '.html') + '\'')

    console.log('Completed task successfully.')
}