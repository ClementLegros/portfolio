const Knowledge = ({ name, percentage }) => {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {name}
        </span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">
          {percentage}%
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500 mb-2">
        <div
          className="bg-cyan-500 hover:bg-cyan-600 h-2.5 rounded-full"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </>
  );
};

export default Knowledge;
