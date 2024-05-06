
import { useRef, useState } from 'react';

import { MDXEditor, MDXEditorMethods, listsPlugin, markdown$, markdownShortcutPlugin } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import path from 'path';
import { fileLoadKey, fileSaveKey } from '../shared/settings';
import { useAtom } from 'jotai';
import { markdownValueStore, selectedFileAtom } from '../store/store';
import { File } from '../shared/types';


const MyMarkdown = () => {

  // const [markdownValue, setMarkdownValue] = useAtom(markdownValueStore);
  // const ref = React.useRef<MDXEditorMethods>(null);


  // useHotkeys(fileLoadKey, () => {
  //   console.log("Open key pressed!");
  //   const result:string = window.electronAPI.onFileLoad();
  //   console.log("the result received is:" + result);
  //   setMarkdownValue(result);
  //   console.log("Markdown value is" + markdownValue);
  // });

  // todo
  // Create a file class having info such as title, content, id, etc. 
  // save to the file on change
  // in the markdown props provide the content value
  // this is usefull when we want to change/re-render the entire content
  // you don't have to handle the value changing while you are editing the document
  // its done automatically

  // move the short cut key somewhere else
  const [selectedFile, setFile] = useAtom(selectedFileAtom);
  const editorRef = useRef<MDXEditorMethods>(null)
  const handleChange = (value: string) => {
    // save selectedFile
    setFile({ ...selectedFile, content: value });
    console.log(selectedFile.content);
  }

  useHotkeys(fileSaveKey, () => {
    console.log("Save key pressed!");
    window.electronAPI.onFileSave(selectedFile);
  });

  useHotkeys(fileLoadKey, () => {
    console.log("Open key pressed!");
    const result: string = window.electronAPI.onFileLoad();
    console.log("the result received is:" + result);
    // const tempFile: File = new File();
    // tempFile.content = result;
    // setFile(tempFile);
  });

  return (
    <div className='block mr-3'>
      <MDXEditor
        ref={editorRef}
        key={selectedFile.uid} markdown={selectedFile.content} onChange={handleChange}
        plugins={[headingsPlugin(), listsPlugin(), markdownShortcutPlugin()]}
        contentEditableClassName='prose prose-p:leading-normal prose-p:m-0 prose-ul:leading-none
        max-w-none'
        autoFocus
      />
    </div>
  );

}

export default MyMarkdown;
