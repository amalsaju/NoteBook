import CopyPasteClipboard from './components/CopyPasteClipboard';
import EditableTitle from './components/EditableTitle';
import OpenFileDialog from './components/OpenFileDialog';
import ShortcutKeys from './components/ShortcutKeys';

const App = () => {
    return (
        <>
            <OpenFileDialog />
            <ShortcutKeys />
            <br />
            <CopyPasteClipboard />
            <br />
            <EditableTitle />
        </>
    );
}

export default App;
