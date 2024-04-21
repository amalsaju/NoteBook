
export interface MenuButtonProps {
    text: string;
}

const MenuButton = (menuButtonProps: MenuButtonProps) => {
    return (
        <div>
            {menuButtonProps.text}
        </div>
    );
}

export default MenuButton;
