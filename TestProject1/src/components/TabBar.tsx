import { useState } from "react";
import EditableTitle from "./EditableTitle";
import { notebookFiles, selectedFileAtom } from "../store/store";
import { useAtom, useAtomValue } from "jotai";


const TabBar = () => {

    const files = useAtomValue(notebookFiles);

    const selectedFile = useAtomValue(selectedFileAtom);

    return (
        <div className="flex bg-zinc-900 max-w-none text-white">
            {files.map((file) => (
                <EditableTitle key={file.uid} title={file.name}
                    classname={selectedFile.name == file.name ? "ml-0.5 bg-zinc-700 border-r-2 border-x-neutral-400 border-t-2 border-cyan-400" : "ml-0.5 border-x-neutral-400 border-r-2"} />
            ))}
        </div>
    );
}

export default TabBar;  
