
import { useState } from 'react';

import { MDXEditor, MDXEditorMethods, listsPlugin} from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import React from 'react';

const MyMarkdown= () => {

    const [markdownValue, setMarkdownValue] = useState('');
    const ref = React.useRef<MDXEditorMethods>(null);

return (
  <div className='block'>
    <MDXEditor ref={ref} markdown={markdownValue} plugins={[headingsPlugin(), listsPlugin()]} 
    onChange={() => setMarkdownValue(ref.current?.getMarkdown())} 
    contentEditableClassName='prose prose-md leading-[1rem] max-w-fit' autoFocus/>
  </div>
);

}

export default MyMarkdown;
