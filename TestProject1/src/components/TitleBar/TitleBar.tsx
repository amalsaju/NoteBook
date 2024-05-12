import MenuFunctions from "./MenuFunctions/MenuFunctions";
import WindowFunctions from "./WindowFunctions";


const TitleBar = () => {

    return (
        <div className="inline-flex bg-gray-800 w-full
        border-b-slate-500 text-white border-b-2 draggable">
            <MenuFunctions className="flex gap-2 ml-2" />
            <div className="w-1/3 grow text-center">NoteBook</div>
            <WindowFunctions className="grow-0 place-self-end mr-2" />
        </div>
    );

}

export default TitleBar;
