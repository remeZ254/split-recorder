const { app, BrowserWindow } = require('electron');
const { initConfiguration, getConfig } = require("./electron/config");

initConfiguration()

let win;

const createWindow = async () => {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (getConfig('devTools:open')) {
    win.webContents.openDevTools(getConfig('devTools:options'));
  }

  win.on('closed', () => win = null);

  await win.loadURL(getConfig('url'))
};

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
