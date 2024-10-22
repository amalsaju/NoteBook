import MenuButton from "./MenuButton";

export enum MenuFunctionType {
    file = 'file',
    view = 'view',
    edit = 'edit',
    help = 'help'
}

export type MenuFunctionProps = {
    className: string
}

const MenuFunctions = (menuFunctionProps: MenuFunctionProps) => {

    return (
        <div className={menuFunctionProps.className}>
            <MenuButton className="hover:bg-gray-700 p-1 cursor-default" text="File" />
            <MenuButton className="hover:bg-gray-700 p-1 cursor-default" text="View" />
            <MenuButton className="hover:bg-gray-700 p-1 cursor-default" text="Edit" />
            <MenuButton className="hover:bg-gray-700 p-1 cursor-default" text="Help" />
        </div>
    );
}


export default MenuFunctions;
