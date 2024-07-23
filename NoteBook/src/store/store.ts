import { atom } from 'jotai';
import { File, FileExtension } from '../shared/types';
import { GetUUID } from '../shared/utilities';

const DefaultNote: File = {
    uid: GetUUID(),
    name: 'Untitled',
    content: '',
    extension: FileExtension.markdown,
    date_created: new Date(),
    last_modified: new Date(),
};

//Check if there are no last edited/opened files, if note use the default note

export const selectedFileAtom = atom<File>(DefaultNote);

const Files: File[] = [];

Files.push(DefaultNote);

export const notebookFiles = atom<File[]>(Files);

export const addFiles = atom(null, (get, set, files: File[]) => {
    set(notebookFiles, [...get(notebookFiles), ...files]);
});

export const maximizeWindowButtonClicked = atom(false);


// Open the last edited note, keep track of all the open tabs
// If there is no last edited note, open a new note