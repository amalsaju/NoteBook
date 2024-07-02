import MenuFunctions from "./MenuFunctions/MenuFunctions";
import WindowFunctions from "./WindowFunctions";


const TitleBar = () => {

    return (
        <div className="inline-flex bg-gray-800 w-full
        border-b-slate-500 text-white border-b-2 ">
            <MenuFunctions className="flex ml-2" />
            <div className="w-1/3 grow text-center place-self-center draggable">NoteBook</div>
            <WindowFunctions className="grow-0 flex gap-2 place-self-center mr-2" />
        </div>
    );

}

export default TitleBar;
