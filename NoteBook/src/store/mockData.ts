import { File, FileExtension } from "../shared/types";

export const MockFiles: File[] = [
    {
        uid: '1234',
        name: 'File1',
        content: 'File 1 test',
        extension: FileExtension.markdown,
        date_created: new Date(),
        last_modified: new Date(),
    },
    {
        uid: '1235',
        name: 'File2',
        content: 'File 2 test',
        extension: FileExtension.markdown,
        date_created: new Date(),
        last_modified: new Date(),
    },
    {
        uid: '1236',
        name: 'File3',
        content: 'File 3 test',
        extension: FileExtension.markdown,
        date_created: new Date(),
        last_modified: new Date(),
    },
    {
        uid: '1237',
        name: 'File4',
        content: 'File 4 test',
        extension: FileExtension.markdown,
        date_created: new Date(),
        last_modified: new Date(),
    },
];
