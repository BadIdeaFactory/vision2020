import DATA from '../data/data.json'

export function getData () {
  return DATA.reduce((accumulator, item) => {
    // The raw data has empty rows for categories. If
    // the row looks empty, skip them.
    if (!item['LIFE DATE'] && !item['MAIN QUOTE']) return accumulator

    accumulator.push(item)
    return accumulator
  }, [])
}

const all = {
  getData
}

export default all
