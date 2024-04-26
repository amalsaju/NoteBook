
import { useState } from 'react';

import { MDXEditor, MDXEditorMethods, listsPlugin } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import path from 'path';
import { fileLoadKey, fileSaveKey } from '../shared/settings';


const MyMarkdown = () => {

  const [markdownValue, setMarkdownValue] = useState('sdkfljsldkjflksjfklsjdlfjslkdfjsjdklfjlsdjflkjsdlkfsdjfksdjfljsdlfjlksdjflksdjflkjsdkfjskdljfklsjdflkjsdlkfjklsdjflkjsdklfjskljdfklsjdfljsdklfjskldjflksjdflkjsdkjflsdjflksdjflkjsdlkfjsdlkfjlksdjflksdjflksdjfkjsdklfjslkdjfklsdjflksdjlfkjsdlkfjlksdjflksdf');
  const ref = React.useRef<MDXEditorMethods>(null);

  useHotkeys(fileSaveKey, () => window.electronAPI.onFileSave("Hellow world!"));
  useHotkeys(fileLoadKey, () => {
    const result:string = window.electronAPI.onFileLoad();
    console.log("the result received is:" + result);
    setMarkdownValue(result);

  });

  return (
    <div className='block mr-3'>
      <MDXEditor ref={ref} markdown={markdownValue} plugins={[headingsPlugin(), listsPlugin()]}
        onChange={() => setMarkdownValue(ref.current?.getMarkdown())}
        contentEditableClassName='prose prose-p:leading-normal prose-p:m-0 max-w-none' autoFocus />
    </div>
  );

}

export default MyMarkdown;
