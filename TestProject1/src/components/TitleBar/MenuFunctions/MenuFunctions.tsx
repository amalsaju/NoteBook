import MenuButton from "./MenuButton";

export interface MenuFunctionProps {
    className: string;
}

const MenuFunctions = (menuFunctionProps: MenuFunctionProps) => {

    return (
        <div className={menuFunctionProps.className}>
            <MenuButton className="hover:bg-gray-700 p-1" text="File" />
            <MenuButton className="hover:bg-gray-700 p-1" text="View" />
            <MenuButton className="hover:bg-gray-700 p-1" text="Edit" />
            <MenuButton className="hover:bg-gray-700 p-1" text="Help" />
        </div>
    );
}


export default MenuFunctions;
