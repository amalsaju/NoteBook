import { useAtom } from 'jotai';
import { selectedFileName } from '../store/store';
import { File } from 'src/shared/types';
import { useState } from 'react';

export interface EditableTitleProps {
    btn_classname: string;
    input_classname: string;
}

const EditableTitle = (props: EditableTitleProps) => {

    const [title, setTitle] = useAtom(selectedFileName);
    const [clicked, setClicked] = useState(true);

    return (
        <>
            {clicked ? <button className={props.btn_classname} onClick={() => setClicked(!clicked)}>{title + '.md'}</button> :
                <input className={props.input_classname} value={title} onChange={e => setTitle(e.target.value)} onBlur={() => setClicked(!clicked)} onKeyDown={e => e.key === 'Enter' && setClicked(!clicked)} autoFocus />}
        </>
    );

}

export default EditableTitle;
