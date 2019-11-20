const csv2json = require('csv2json')
const fs = require('fs')
const https = require('https')
const path = require('path')

// We can read CSV directly from a Google Sheets. Here's how:
// From the sheet, click "File", then "Publish to the web"
// In the dialog box that appears, select the "Link" tab
// Set the sheet you want to publish, and set the format as CSV
// Make sure sign-in is not required.
// Hit the green Publish button. You'll get a URL.
// That URL is placed here.
// There should not be any problem with this URL being public.
const SOURCE_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYE0FFo17MIrP2LkazGOMMEceUEYSBU9FqqmFz1Bvq-d2XWNma2XQiQ4IVIbKcLI2Fmki-BB3OttV_/pub?gid=0&single=true&output=csv'

// Alternatively, if the URL is not available, you can also export
// the CSV yourself and put the file here. Raw CSV in this folder
// will not get committed to the repository.
const SOURCE_FILENAME = 'Vision 2020 Digital Content - PEOPLE.csv'
const DEST_FILENAME = 'data.json'

const toFile = fs.createWriteStream(path.join(__dirname, DEST_FILENAME))
const toJson = csv2json({
  // Defaults to comma.
  separator: ','
})

if (SOURCE_URL) {
  transformGSheetToJson()
} else if (SOURCE_FILENAME) {
  transformFileToJson()
}

function transformGSheetToJson () {
  https.get(SOURCE_URL, function (response) {
    response.pipe(toJson).pipe(toFile)
  })
}

function transformFileToJson () {
  fs.createReadStream(path.join(__dirname, SOURCE_FILENAME))
    .pipe(toJson)
    .pipe(toFile)
}
