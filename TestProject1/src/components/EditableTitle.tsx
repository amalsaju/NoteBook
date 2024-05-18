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

    console.log("Clicked value: " + clicked);

    const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);

    const handleClick = (value: boolean) => {
        if (uuid != selectedFile.uid) return;
        setClicked(value);
    }

    return (
        <div className={classname}>
            {clicked && uuid == selectedFile.uid ?
                <input className='text-black w-28 text-center' value={title}
                    onChange={e => setSelectedFile((selectedFile) =>
                        ({ ...selectedFile, name: e.target.value }))}
                    onBlur={() => handleClick(false)}
                    onKeyDown={e => e.key === 'Enter' && handleClick(false)} autoFocus={uuid == selectedFile.uid} /> :
                <button className='w-28' onClick={() => handleClick(true)}>{title + '.md'}</button>}
        </div>
    );

}

export default EditableTitle;
