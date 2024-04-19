import MenuFunctions from "./MenuFunctions";
import WindowFunctions from "./WindowFunctions";


const TitleBar = () => {

    return (
        <div className="block bg-gray-800 max-w-7xl">
            <MenuFunctions />
            <span className="block-inline">NoteBook</span>
            <WindowFunctions />
        </div>
    );

}

export default TitleBar;
