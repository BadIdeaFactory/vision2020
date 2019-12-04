const fs = require('fs')
const path = require('path')

const SOURCE_FILENAME = 'raw.json'
const DEST_FILENAME = 'data.json'
const MAX_CONTEXTS = 10

// Read the data
const contents = fs.readFileSync(path.join(__dirname, SOURCE_FILENAME))
const raw = JSON.parse(contents.toString())

// Create new data object
const data = []

for (let i = 0; i < raw.length; i++) {
  const item = raw[i]
  if (!item.slug) continue

  console.log('Processing', item.slug)
  const pioneer = {
    key: item.slug,
    slug: item.slug,
    name: item.NAME.trim(),
    life_date: item['LIFE DATE'].trim(),
    portrait_img: item['PORTRAIT IMG'].trim(),
    titles: [],
    context: [],
    image_credits: item['IMAGE CREDITS'].trim()
  }

  // Add titles if present
  if (item['TITLE 1']) pioneer.titles.push(item['TITLE 1'].trim())
  if (item['TITLE 2']) pioneer.titles.push(item['TITLE 2'].trim())
  if (item['TITLE 3']) pioneer.titles.push(item['TITLE 3'].trim())
  if (item['TITLE 4']) pioneer.titles.push(item['TITLE 4'].trim())

  // Process contexts
  for (let j = 1; j <= MAX_CONTEXTS; j++) {
    const contextItem = {
      page: j,
      text: item[`CONTEXT TEXT ${j}`],
      images: item[`CONTEXT IMG ${j}`]
        // Separate entry into array of filenames
        .split(';')
        // Trim trailing/leading spaces
        .map(Function.prototype.call, String.prototype.trim)
        // Remove empty entries
        .filter((img) => img !== '')
    }

    // Get slideshows
    // The pages with slideshows are possibly 4, 5, or 6
    // If the first image is missing, we assume it doesn't exist.
    if (j === 4 || j === 5 || j === 6) {
      const hasSlideshow = item[`SLIDESHOW IMG ${j}a`]
      if (hasSlideshow) {
        contextItem.slideshow = []

        // Max slideshow items up to `j`
        const alphabet = 'abcdefghij'.split('')
        alphabet.forEach((letter) => {
          const text = item[`SLIDESHOW TEXT ${j}${letter}`]
          const image = item[`SLIDESHOW IMG ${j}${letter}`]
          if (image) {
            contextItem.slideshow.push({
              text,
              image
            })
          }
        })
      }
    }

    // Skip empty pages
    if (contextItem.text === '' && contextItem.images.length === 0) continue

    pioneer.context.push(contextItem)
  }

  data.push(pioneer)
}

// Write data
fs.writeFileSync(
  path.join(__dirname, DEST_FILENAME),
  JSON.stringify(data, null, 2)
)
