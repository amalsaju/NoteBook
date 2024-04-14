import Markdown from 'react-markdown';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

const MyMarkdown = () => {

    const [markdown, setMarkdown] = useState(`# Hello, **world**!`);

    return (
        <>
        <TextareaAutosize minRows={10} onChange={e => setMarkdown(e.target.value)}></TextareaAutosize>
        <Markdown remarkPlugins={[remarkGfm, emoji]}>{markdown}</Markdown>
        </>
    );

}

export default MyMarkdown;