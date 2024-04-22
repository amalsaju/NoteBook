
import { useState } from 'react';

import { MDXEditor, MDXEditorMethods, listsPlugin} from '@mdxeditor/editor'
import { headingsPlugin } from '@mdxeditor/editor'

import '@mdxeditor/editor/style.css'
import React from 'react';

const MyMarkdown= () => {

    const [markdownValue, setMarkdownValue] = useState('sdkfljsldkjflksjfklsjdlfjslkdfjsjdklfjlsdjflkjsdlkfsdjfksdjfljsdlfjlksdjflksdjflkjsdkfjskdljfklsjdflkjsdlkfjklsdjflkjsdklfjskljdfklsjdfljsdklfjskldjflksjdflkjsdkjflsdjflksdjflkjsdlkfjsdlkfjlksdjflksdjflksdjfkjsdklfjslkdjfklsdjflksdjlfkjsdlkfjlksdjflksdf');
    const ref = React.useRef<MDXEditorMethods>(null);

return (
  <div className='block mr-3'>
    <MDXEditor ref={ref} markdown={markdownValue} plugins={[headingsPlugin(), listsPlugin()]} 
    onChange={() => setMarkdownValue(ref.current?.getMarkdown())} 
    contentEditableClassName='prose m-1 text-wrap leading-tight prose-p:m-1 max-w-none' autoFocus/>
  </div>
);

}

export default MyMarkdown;
