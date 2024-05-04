import { v4 as uuidv4 } from 'uuid';

// export interface FileExtension {
//     type: 'txt' | 'md';
// }

export enum FileExtension {
    text = '.txt',
    markdown = '.md'
}


export class File {
    readonly uid: string;
    name: string;
    content: string;
    extension: FileExtension;
    readonly date_created: Date;
    last_modified: Date;

    constructor(name?: string, content?: string, extension?: FileExtension) {
        this.uid = uuidv4();
        this.date_created = new Date();
        this.last_modified = new Date();

        this.name = name ? name : 'Untitiled';
        this.content = content ? content : '';
        this.extension = extension ? extension : FileExtension.text;
    }
}

export interface TabFilesList {
    fileList: File[],
}
