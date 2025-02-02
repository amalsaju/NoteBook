import { app, BrowserWindow, Menu, MenuItem, dialog, ipcMain, } from 'electron';
import path from 'path';
import { notebookFilesPath } from './shared/settings';
import { File } from './shared/types';



var fs = require('fs');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const defaultPath = app.getPath('home') + notebookFilesPath;

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    minWidth: 600,
    minHeight: 300,
    title: 'NoteBook',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();

  }
});

if (!fs.existsSync(defaultPath)) fs.mkdirSync(defaultPath);

const saveFileDialogOptions = {
  title: 'Save file',
  defaultPath: defaultPath,
  filters: [
    { name: 'Markdown Files', extensions: ['md'] },
    { name: 'Text Files', extensions: ['txt'] }
  ],
}

ipcMain.handle('onFileSave', (event, ...args) => {
  dialog.showSaveDialog(saveFileDialogOptions).then(file => {
    console.log(file.canceled);
    if (!file.canceled) {
      console.log(file.filePath.toString());
      const tempFile: File = args[0];
      console.log("Received data:" + tempFile.content);
      // Creating and Writing to the sample.txt file 
      fs.writeFile(file.filePath.toString(),
        args[0].content.toString(), function (err: any) {
          if (err) throw err;
          console.log('Saved!');
        });
    }
  })
});

const openFileDialogOptions = {
  title: 'Load File',
  defaultPath: defaultPath,
  filters: [
    { name: 'Markdown Files', extensions: ['md'] },
    { name: 'Text Files', extensions: ['txt'] }
  ],
}

ipcMain.handle('onFileLoad', async (event, ...args) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(openFileDialogOptions);
  console.log(canceled);
  if (!canceled) {
    console.log(filePaths[0].toString());

    const result: string = fs.readFileSync(filePaths[0], { encoding: 'utf8' });
    console.log("Result in main:" + result);
    return result;

  };
});

ipcMain.handle('closeButtonClick', (event, ...args) => {
  // save the files
  // app.quit();
  BrowserWindow.getFocusedWindow().close();
})

ipcMain.handle('minimizeButtonClick', (event, ...args) => {
  // save the files
  BrowserWindow.getFocusedWindow().minimize();
})

ipcMain.handle('maximizeButtonClick', (event, ...args) => {
  // save the files
  BrowserWindow.getFocusedWindow().maximize();
})

ipcMain.handle('restoreButtonClick', (event, ...args) => {
  // save the files
  BrowserWindow.getFocusedWindow().restore();
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
