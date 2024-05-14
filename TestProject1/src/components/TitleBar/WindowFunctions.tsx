import { IoClose } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import { FaWindowMaximize } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { FaWindowRestore } from "react-icons/fa6";
import { useState } from "react";


export interface MenuFunctionProps {
    className: string;
}

const WindowFunctions = (menuFunctionProps: MenuFunctionProps) => {

    const iconSize = 25;

    const [maximized, setMaximized] = useState(false);

    const handleMaximize = () => {
        setMaximized(!maximized);
        if (maximized) {
            window.electronAPI.maximizeButtonClick();
            console.log("Maximised: " + maximized);
        } else {
            window.electronAPI.restoreButtonClick();
            console.log("Maximised: " + maximized);
        }
    }

    return (
        <div className={menuFunctionProps.className}>
            < IoRemove className="hover:bg-gray-700 p-1" fontSize={iconSize} onClick={() => window.electronAPI.minimizeButtonClick()} />
            < PiRectangle className="hover:bg-gray-700 p-1" fontSize={iconSize} onClick={handleMaximize} />
            < IoClose className="hover:bg-red-700 p-1" fontSize={iconSize} onClick={() => window.electronAPI.closeButtonClick()} />
        </div>
    );

}


export default WindowFunctions;
