// Native
const { join } = require('path')
const { format } = require('url')

// Packages
const { BrowserWindow, app, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./')

  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      // Note: the `remote` module will be deprecated in future.
      // https://www.electronjs.org/docs/breaking-changes#default-changed-enableremotemodule-defaults-to-false
      enableRemoteModule: true,
      preload: join(__dirname, 'preload.js')
    }
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
      pathname: join(__dirname, '../../app/renderer/index.html'),
      protocol: 'file:',
      slashes: true
    })

  mainWindow.loadURL(url)
  mainWindow.setKiosk(true)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on('message', (event, message) => {
  event.sender.send('message', message)
})
