import CopyPasteClipboard from './components/CopyPasteClipboard';
import OpenFileDialog from './components/OpenFileDialog';
import ShortcutKeys from './components/ShortcutKeys';

const App = () => {
    return (
        <>
            <OpenFileDialog />
            <ShortcutKeys />
            <br />
            <CopyPasteClipboard />
        </>
    );
}

export default App;
