// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
    throw new Error('contextIsolation must be enabled in the BrowserWindow')
}


try {
    contextBridge.exposeInMainWorld('electronAPI', {
        onFileSave: () => ipcRenderer.invoke('onFileSave'),
    })
} catch (err) {
    console.log(err);
}
