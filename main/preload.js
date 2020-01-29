const { remote, ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
  global.ipcRenderer = ipcRenderer
  global.VISION2020_KIOSK = true

  const kioskfile = path.join(remote.app.getPath('desktop'), 'kiosk_id.txt')
  try {
    const data = fs.readFileSync(kioskfile)
    const id = data.toString()
    global.VISION2020_KIOSK_ID = Number.parseInt(id, 10)
  } catch (err) {
    console.error(`Error opening ${kioskfile}:`, err)
    global.VISION2020_KIOSK_ID = 0
  }
})
