import MenuFunctions from "./MenuFunctions/MenuFunctions";
import WindowFunctions from "./WindowFunctions";


const TitleBar = () => {

    return (
        <div className="flex bg-gray-800 max-w-none
        border-b-slate-500 text-white 
        border-b-2 draggable">
            <MenuFunctions className="w-1/3 flex" />
            <span className=" w-1/3 block-inline">NoteBook</span>
            <WindowFunctions className="w-1/3 self-end" />
        </div>
    );

}

export default TitleBar;