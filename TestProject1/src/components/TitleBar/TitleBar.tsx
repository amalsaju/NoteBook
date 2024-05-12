import MenuFunctions from "./MenuFunctions/MenuFunctions";
import WindowFunctions from "./WindowFunctions";


const TitleBar = () => {

    return (
        <div className="grid gap-4 grid-cols-3 grid-rows-1 bg-gray-800 max-w-none
        border-b-slate-500 text-white 
        border-b-2 draggable">
            <MenuFunctions className="flex" />
            <div className="place-self-center">NoteBook</div>
            <WindowFunctions className="place-self-end" />
        </div>
    );

}

export default TitleBar;
