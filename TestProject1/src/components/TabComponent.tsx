import { atom, useAtom, useAtomValue } from 'jotai';
import { notebookFiles, selectedFileAtom } from '../store/store';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export type TabComponentProps = {
    classname: string,
    title: string,
    uuid: string,
}

const clickedAtom = atom(false);

const TabComponent = ({ classname, title, uuid }: TabComponentProps) => {

    const [clicked, setClicked] = useAtom(clickedAtom);

    // console.log("Clicked value: " + clicked);

    const [selectedFile, setSelectedFile] = useAtom(selectedFileAtom);

    const [files, setFiles] = useAtom(notebookFiles);

    const handleClick = (value: boolean) => {
        if (uuid != selectedFile.uid) {

            setSelectedFile(files.filter(file => file.uid == uuid)[0]);

            return;
        }
        setClicked(value);
    }

    const handleTitleChange = (value: string) => {
        if (uuid != selectedFile.uid) return;

        setSelectedFile((selectedFile) =>
            ({ ...selectedFile, name: value }))

        console.log("Selected File Name: " + selectedFile.name);
    }

    const handleTabClose = () => {

        setFiles((files) => files.filter(file => file.uid != uuid));

        console.log("Number of files: " + files.length);

        if (uuid == selectedFile.uid) {

            setSelectedFile(files.filter(file => file.uid != uuid)[0]);

        }
    }

    return (
        <div className={classname + " flex w-36"}>
            <div className=''>
                {clicked && uuid == selectedFile.uid ?
                    <input className='text-black w-28 text-center' value={selectedFile.name}
                        onChange={e => handleTitleChange(e.target.value)}
                        onBlur={() => handleClick(false)}
                        onKeyDown={e => e.key === 'Enter' && handleClick(false)}
                        autoFocus={uuid == selectedFile.uid} /> :
                    <button className='w-28' onClick={() => handleClick(true)}>
                        {(uuid == selectedFile.uid ? selectedFile.name : title) + '.md'}</button>}
            </div>
            < IoClose className="hover:bg-gray-700 w-8 place-self-center mr-2"
                fontSize={16} onClick={handleTabClose} />

        </div>
    );

}

export default TabComponent;
