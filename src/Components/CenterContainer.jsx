const CenterContainer = ({ children }) => {
  return (
    <div className="flex flex-row justify-center bg-zinc-700">
      <div className="flex flex-col w-[20rem]  sm:w-[25rem] pt-5">
        {children}
      </div>
    </div>
  );
};

export default CenterContainer;
