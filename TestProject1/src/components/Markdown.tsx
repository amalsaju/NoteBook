import Markdown from 'react-markdown';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import React from 'react';

const MyMarkdown= () => {

    const [markdownValue, setMarkdown] = useState(`# Hello, **world**!`);

    function handleChange(value:string){
        setMarkdown(value);
        console.log(value);
    }

    const ref = React.useRef<MDXEditorMethods>(null)
return (
  <>
    <button onClick={() => ref.current?.insertMarkdown(markdownValue)}>Insert new markdown</button>
    <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
    <MDXEditor ref={ref} markdown={markdownValue} onChange={(value) => console.log(value)} />
  </>
);

}

export default MyMarkdown;
