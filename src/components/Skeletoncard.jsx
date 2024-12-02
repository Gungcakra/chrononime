const Skeletoncard = () => {
  return (
    <>
      <div className="w-[13rem] h-[20rem] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
  {/* Image section */}
  <div className="h-[80%] w-full p-0 bg-gray-200 dark:bg-gray-200 animate-pulse-fast"></div>
  {/* Text section */}
  <div className="h-[20%] flex items-start justify-start">
    <a href="#">
      <h5 className="mb-2 text-xm font-semibold tracking-tight text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-200 w-1/2 h-4 animate-pulse-slow"></h5>
      <div className="flex">
        <h5 className="mb-2 text-md font-semibold tracking-tight px-1 rounded-sm mx-1 bg-gray-200 dark:bg-gray-200 w-1/4 h-4 animate-pulse-fast"></h5>
        <h5 className="mb-2 text-md font-semibold tracking-tight px-1 rounded-sm mx-1 bg-gray-200 dark:bg-gray-200 w-1/4 h-4 animate-pulse-slow"></h5>
      </div>
    </a>
  </div>
</div>
    </>
  );
};

export default Skeletoncard;
