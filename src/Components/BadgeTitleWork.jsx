const BadgeTitleWork = ({ title, children }) => {
    return (
        <div className="flex flex-row items-center text-white w-full mb-4">
            <div className="bg-cyan-800 w-[24%] h-7 rounded-md">
                <p className="text-center font-bold text-md text-cyan-500">{title}</p>
            </div>
            <div className="ml-2">
                {children}
            </div>
        </div>
    )
}

export default BadgeTitleWork;