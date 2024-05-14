// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


import { contextBridge, ipcRenderer } from 'electron'
import { File } from './shared/types';

if (!process.contextIsolated) {
    throw new Error('contextIsolation must be enabled in the BrowserWindow')
}


try {
    contextBridge.exposeInMainWorld('electronAPI', {
        //Electron recommends using ipcRenderer.invoke() whereever possible
        onFileSave: (dataToBeWritten: File) => ipcRenderer.invoke('onFileSave', dataToBeWritten),
        onFileLoad: async () => {
            const response = await ipcRenderer.invoke('onFileLoad');
            console.log("Result in preload: " + response);
            return response;
        },
        closeButtonClick: () => ipcRenderer.invoke('closeButtonClick'),
        minimizeButtonClick: () => ipcRenderer.invoke('minimizeButtonClick'),
        maximizeButtonClick: () => ipcRenderer.invoke('maximizeButtonClick'),
        restoreButtonClick: () => ipcRenderer.invoke('restoreButtonClick'),
    })
} catch (err) {
    console.log(err);
}
