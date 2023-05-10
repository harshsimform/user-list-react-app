const Skeleton = (): JSX.Element => {
  const USER_LIMIT: number = import.meta.env.VITE_APP_USER_LIMIT;
  const arr = Array.from({ length: USER_LIMIT });
  return (
    <>
      <div className="h-24 rounded-md mt-5">
        <div className="flex animate-pulse flex-row items-center justify-between">
          <div className="flex flex-row space-x-2 space-y-1 ml-4">
            <div className="w-20 h-3 bg-gray-300 rounded-md"></div>
            <div className="flex flex-col space-y-3"></div>
          </div>
          <div className="w-20 bg-gray-300 h-3 rounded-md ml-20"></div>
          <div className="w-20 bg-gray-300 h-3 rounded-md"></div>
          <div className="w-7 h-7 rounded-full"></div>
        </div>
        {arr &&
          arr.map((user, ind) => {
            return (
              <div
                key={ind}
                className="flex animate-pulse flex-row items-center justify-between my-9"
              >
                <div className="flex flex-row space-x-2 space-y-1 ml-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex flex-col space-y-3">
                    <div className="w-20 bg-gray-300 h-3 rounded-md"></div>
                    <div className="w-36 bg-gray-300 h-2 rounded-md"></div>
                  </div>
                </div>
                <div className="w-24 bg-gray-300 h-3 rounded-md"></div>
                <div className="w-24 bg-gray-300 h-3 rounded-md"></div>
                <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Skeleton;
