import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";


function App() {
  return (
    <div className="w-full flex flex-col relative overflow-hidden items-center">

      <h1 className=" bg-slate-600 rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold"
      >RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random></Random>
        <Tag></Tag>
      </div>

    </div>
  );
}

export default App;
