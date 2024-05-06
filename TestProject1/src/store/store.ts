import { atom } from 'jotai';
import { File } from '../shared/types';

export const markdownValueStore = atom('## Generic welcome text');

export const selectedFileAtom = atom(new File());

export const selectedFileName = atom('Untitled');

export const selectedFileContent = atom('');