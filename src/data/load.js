import DATA from '../data/data.json'

export function getData () {
  return DATA
}

export function getEntry (id) {
  const data = getData()

  if (!id) return

  let found = false

  for (let i = 0; i < data.length; i++) {
    if (id && data[i].slug && id === data[i].slug) {
      found = data[i]
      break
    }
  }

  if (found) return found
  else return null
}

const all = {
  getData
}

export default all
