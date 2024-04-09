import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";


const CopyPasteClipboard = () => {

    const [clipboard, setState] = useState({ value: ' ', copied: false });

    return (
        <div>
            <input value={clipboard.value}
                onChange={({ target: { value } }) => setState({ value, copied: false })} />

            <CopyToClipboard text={clipboard.value}
                onCopy={() => setState({ value: clipboard.value, copied: true })}>
                <span>Copy to clipboard with span</span>
            </CopyToClipboard>

            <CopyToClipboard text={clipboard.value}
                onCopy={() => setState({ value: clipboard.value, copied: true })}>
                <button>Copy to clipboard with button</button>
            </CopyToClipboard>

            {clipboard.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
        </div>
    );

}

export default CopyPasteClipboard;
