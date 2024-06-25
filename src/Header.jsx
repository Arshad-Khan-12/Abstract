import React from "react";

const Header = () => {
  return (
    <div>
      <div className="h-20 w-auto bg-black flex">
        <div className="h-14 w-11/12 flex justify-between mx-14 my-3">
          <div className="flex items-center justify-evenly gap-4">
            <h1 className="text-2xl text-white ">&#8709; Abstract</h1>
            <h1 className="text-white">|</h1>
            <h1 className="text-2xl text-white">Help Center</h1>
          </div>
          <div className="flex items-center justify-evenly gap-4">
            <button className="text-white text-2xl border-zinc-50 border-[1px] py-3 px-7 rounded-md">
              Submit a request
            </button>
            <button className="text-white text-2xl bg-[#4C5FD5] py-3 px-10 border-none rounded-lg">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Header;
export default Header;
