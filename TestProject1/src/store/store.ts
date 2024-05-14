import { atom } from 'jotai';
import { File } from '../shared/types';

export const markdownValueStore = atom('## Generic welcome text');

export const selectedFileAtom = atom<File>(new File());

export const selectedFileName = atom('Untitled');

export const selectedFileContent = atom('');

export const notebookFiles = atom<File[]>([]);

export const addFiles = atom(null, (get, set, files: File[]) => {
    set(notebookFiles, [...get(notebookFiles), ...files]);
});
