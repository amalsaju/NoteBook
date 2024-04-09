import Button from '@mui/material/Button';
import { useFilePicker } from 'use-file-picker';
import { useHotkeys } from 'react-hotkeys-hook';

const FileButton = () =>{

    const {openFilePicker, filesContent, loading } = useFilePicker({
        accept: '.md',
    });

    useHotkeys('ctrl+o', () => openFilePicker());

    return (
        <>
        <Button variant="contained" onClick={() => openFilePicker()} >
            Open File Explorer
        </Button>
        </>
    );
}

export default FileButton;
