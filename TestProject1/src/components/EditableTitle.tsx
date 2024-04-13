import { useState } from "react";


const EditableTitle = () => {

    const [title, setTitle] = useState('Untitled');
    const [clicked, setClicked] = useState(true);

    return (
        <>
            {clicked ? <button onClick={() => setClicked(!clicked)}>{title + '.md'}</button> :
                <input value={title} onChange={e => setTitle(e.target.value)} onBlur={() => setClicked(!clicked)} autoFocus/>}
        </>
    );

}

export default EditableTitle;
