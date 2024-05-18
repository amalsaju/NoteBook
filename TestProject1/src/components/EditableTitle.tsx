import { atom, useAtom, useAtomValue } from 'jotai';
import { selectedFileAtom } from '../store/store';
import { useState } from 'react';

export type EditableTitleProps = {
    classname: string,
    title: string,
    uuid: string,
}

const clickedAtom = atom(false);

const EditableTitle = ({ classname, title, uuid }: EditableTitleProps) => {

    const [clicked, setClicked] = useAtom(clickedAtom);

    // console.log("Clicked value: " + clicked);

    const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);

    const handleClick = (value: boolean) => {
        if (uuid != selectedFile.uid) return;
        setClicked(value);
    }

    const handleTitleChange = (value: string) => {
        if (uuid != selectedFile.uid) return;

        setSelectedFile((selectedFile) =>
            ({ ...selectedFile, name: value }))

        console.log("Selected File Name: " + selectedFile.name);
    }

    return (
        <div className={classname}>
            {clicked && uuid == selectedFile.uid ?
                <input className='text-black w-28 text-center' value={selectedFile.name}
                    onChange={e => handleTitleChange(e.target.value)}
                    onBlur={() => handleClick(false)}
                    onKeyDown={e => e.key === 'Enter' && handleClick(false)}
                    autoFocus={uuid == selectedFile.uid} /> :
                <button className='w-28' onClick={() => handleClick(true)}>
                    {(uuid == selectedFile.uid ? selectedFile.name : title) + '.md'}</button>}
        </div>
    );

}

export default EditableTitle;
