import { atom } from 'jotai';
import { File } from '../shared/types';
import { MockFiles } from './mockData';

export const markdownValueStore = atom('## Generic welcome text');

export const selectedFileAtom = atom<File>(MockFiles[0]);

export const notebookFiles = atom<File[]>(MockFiles);

export const addFiles = atom(null, (get, set, files: File[]) => {
    set(notebookFiles, [...get(notebookFiles), ...files]);
});

export const maximizeWindowButtonClicked = atom(false);
