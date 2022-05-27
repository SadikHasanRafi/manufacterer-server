import React from "react";

const Loading = () => {
  return (
    <div className=" absolute z-10  flex justify-center items-center bg-white/75 w-[100vw] h-screen">
       <div class="radial-progress animate-spin" style={{ "--value": 50 }}/>
    </div>
  );
};

export default Loading;
