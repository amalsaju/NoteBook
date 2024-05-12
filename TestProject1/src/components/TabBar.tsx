import EditableTitle from "./EditableTitle";


const TabBar = () => {
    return (
        <div className="flex bg-gray-800 max-w-none text-white">
            <EditableTitle btn_classname={"pl-4"} input_classname={" pl-4 text-black"} />
        </div>
    );
}

export default TabBar;  
