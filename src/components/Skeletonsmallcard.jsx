export const Skeletonsmallcard = () => {
  return (
    <>
      <div className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-sm p-2 flex justify-start items-start animate-pulse">
        <div className="w-[4rem] h-[6rem] rounded-sm bg-gray-200 dark:bg-gray-700"></div>
        <div className="col ml-2">
          <p className="text-white text-md font-semibold h-4 w-24 bg-gray-200 dark:bg-gray-700"></p>
          <p className="text-white text-md h-4 w-16 bg-gray-200 dark:bg-gray-700"></p>
          <p className="text-white text-md h-4 w-16 bg-gray-200 dark:bg-gray-700"></p>
        </div>
      </div>
    </>
  );
};
