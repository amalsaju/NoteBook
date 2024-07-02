
export type MenuButtonProps = {
    text: string,
    className?: string
}

const MenuButton = (menuButtonProps: MenuButtonProps) => {
    return (
        <button className={menuButtonProps.className}>
            {menuButtonProps.text}
        </button>
    );
}

export default MenuButton;
