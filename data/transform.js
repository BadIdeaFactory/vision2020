const csv2json = require('csv2json')
const fs = require('fs')
const path = require('path')

const SOURCE_FILENAME = 'Vision 2020 Digital Content - PEOPLE.csv'
const DEST_FILENAME = 'data.json'

fs.createReadStream(path.join(__dirname, SOURCE_FILENAME))
  .pipe(csv2json({
    // Defaults to comma.
    separator: ','
  }))
  .pipe(fs.createWriteStream(path.join(__dirname, DEST_FILENAME)))
