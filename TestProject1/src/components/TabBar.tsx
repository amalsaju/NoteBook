import EditableTitle from "./EditableTitle";


const TabBar = () => {
    return (
        <div className="flex bg-gray-800 max-w-none text-white">
            <EditableTitle classname={" ml-0.5"} />
            <EditableTitle classname={" ml-0.5"} />
        </div>
    );
}

export default TabBar;  
