// @ts-check

const {app, BrowserWindow} = require("electron");

const createWindow = () => {
    const w = new BrowserWindow({
        width: 480,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    w.loadFile("index.html");
}

app.whenReady().then(createWindow);
