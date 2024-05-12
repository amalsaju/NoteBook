import { useAtom } from 'jotai';
import { selectedFileName } from '../store/store';
import { File } from 'src/shared/types';
import { useState } from 'react';

export interface EditableTitleProps {
    classname: string;
}

const EditableTitle = (props: EditableTitleProps) => {

    const [title, setTitle] = useAtom(selectedFileName);
    const [clicked, setClicked] = useState(false);

    return (
        <div className={props.classname}>
            {clicked ? <button className='w-28' onClick={() => setClicked(!clicked)}>{title + '.md'}</button> :
                <input className='text-black w-28 text-center' value={title} onChange={e => setTitle(e.target.value)} onBlur={() => setClicked(!clicked)}
                    onKeyDown={e => e.key === 'Enter' && setClicked(!clicked)} autoFocus />}
        </div>
    );

}

export default EditableTitle;
