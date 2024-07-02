
import { useFilePicker } from "use-file-picker";


const OpenFileDialog = () => {

    const { openFilePicker, filesContent, loading } = useFilePicker({
        accept: ['.md', '.txt'],
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <button onClick={() => openFilePicker()}>
            Select File
        </button>
        <br />
        {filesContent.map((file, index) => (
            <div>
                <h4>Name: {file.name}</h4>
                <div key={index}>{file.content}</div>
            </div>
        ))}
        </>
    )

}

export default OpenFileDialog;
