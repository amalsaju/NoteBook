import { useAtom, useAtomValue } from 'jotai';
import { selectedFileAtom } from '../store/store';
import { useState } from 'react';

export interface EditableTitleProps {
    classname: string;
    title: string;
}

const EditableTitle = ({ classname, title }: EditableTitleProps) => {


    const [clicked, setClicked] = useState(false);

    const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);
    return (
        <div className={classname}>
            {clicked ? <button className='w-28' onClick={() => setClicked(!clicked)}>{title + '.md'}</button> :
                <input className='text-black w-28 text-center' value={title}
                    onChange={e => setSelectedFile((selectedFile) =>
                        ({ ...selectedFile, name: e.target.value }))}
                    onBlur={() => setClicked(!clicked)}
                    onKeyDown={e => e.key === 'Enter' && setClicked(!clicked)} autoFocus />}
        </div>
    );

}

export default EditableTitle;
