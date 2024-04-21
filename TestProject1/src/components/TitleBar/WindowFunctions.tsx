
export interface MenuFunctionProps {
    className: string;
}

const WindowFunctions = (menuFunctionProps: MenuFunctionProps) => {

    return (
        <div className={menuFunctionProps.className}>
            <button>Minimize</button>
            <button>Maximise</button>
            <button>Close</button>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> */}

        </div>
    );

}


export default WindowFunctions;
