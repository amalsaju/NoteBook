import { atom, useAtom, useAtomValue } from 'jotai';
import { selectedFileAtom } from '../store/store';
import { useState } from 'react';

export interface EditableTitleProps {
    classname: string;
    title: string;
}

const clickedAtom = atom(false);

const EditableTitle = ({ classname, title }: EditableTitleProps) => {


    const [clicked, setClicked] = useAtom(clickedAtom);

    const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);

    return (
        <div className={classname}>
            {clicked ?
                <input className='text-black w-28 text-center' value={title}
                    onChange={e => setSelectedFile((selectedFile) =>
                        ({ ...selectedFile, name: e.target.value }))}
                    onBlur={() => setClicked(!clicked)}
                    onKeyDown={e => e.key === 'Enter' && setClicked(!clicked)} autoFocus /> :
                <button className='w-28' onClick={() => setClicked(!clicked)}>{title + '.md'}</button>}
        </div>
    );

}

export default EditableTitle;
