import MenuButton from "./MenuButton";

export interface MenuFunctionProps {
    className: string;
}

const MenuFunctions = (menuFunctionProps: MenuFunctionProps) => {

    return (
        <div className={menuFunctionProps.className}>
            <MenuButton className="hover:bg-sky-700 " text="File" />
            <MenuButton text="View" />
            <MenuButton text="Edit" />
            <MenuButton text="Help" />
        </div>
    );
}

export default MenuFunctions;
