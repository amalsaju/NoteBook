import { IoClose } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";
import { FaWindowMaximize } from "react-icons/fa";
import { PiRectangle } from "react-icons/pi";
import { FaWindowRestore } from "react-icons/fa6";


export interface MenuFunctionProps {
    className: string;
}

const WindowFunctions = (menuFunctionProps: MenuFunctionProps) => {

    const iconSize = 25;

    return (
        <div className={menuFunctionProps.className}>
            < IoRemove className="hover:bg-gray-700 p-1" fontSize={iconSize}  />
            < PiRectangle className="hover:bg-gray-700 p-1"fontSize={iconSize} />
            < IoClose className="hover:bg-red-700 p-1" fontSize={iconSize}/>
        </div>
    );

}


export default WindowFunctions;
