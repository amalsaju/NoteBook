import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";


const ShortcutKeys = () => {

    const [shortKey, setShortKey] = useState('ctrl+o');

    useHotkeys(shortKey, () => console.log("Write to console"))

    return(
        <>
        <br />
        <input value={shortKey} onChange={e => setShortKey(e.target.value)} />
        <div>
            <p>The current short cut key for writing to console is: {shortKey}</p>
        </div>
        </>
    );

}

export default ShortcutKeys;
