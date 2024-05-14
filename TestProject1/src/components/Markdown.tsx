
import { useRef, useState } from 'react';

import {
  KitchenSinkToolbar, MDXEditor, MDXEditorMethods, codeBlockPlugin, codeMirrorPlugin,
  diffSourcePlugin, directivesPlugin, frontmatterPlugin, imagePlugin, linkDialogPlugin, linkPlugin,
  listsPlugin, markdownShortcutPlugin, quotePlugin, sandpackPlugin, tablePlugin, thematicBreakPlugin, toolbarPlugin
} from '@mdxeditor/editor'
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

  useHotkeys(fileLoadKey, async () => {
    console.log("Open key pressed!");
    const result = await window.electronAPI.onFileLoad();
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
        plugins={[
          // toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          // frontmatterPlugin(),
          // code block plugin is a bit messy - not able to remove the block and get out of it, etc
          // codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
          // codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
          diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
          markdownShortcutPlugin()]}
        contentEditableClassName='prose prose-p:leading-normal prose-p:m-0 prose-ul:leading-none
        max-w-none'
        autoFocus
      />
    </div>
  );

}

export default MyMarkdown;
