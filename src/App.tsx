//import { useState } from 'react'
import Search from "./utils/Search";
import { DropDown } from "./utils/DropDown";
import { SettingButton } from "./utils/SettingButton";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-90px bg-slate-300 overflow-visible">
        <div className="flex justify-evenly h-22 p-5 bg-slate-400 ">
          <h1 className="text-4xl font-serif italic  text-black-400 p-2">
            CAITYLN
          </h1>

          <div className=" flex justify-center h-18 w-32 p-2">
            <DropDown />
          </div>

          <div className="flex justify-center h-18 w-18  p-2">
            <SettingButton />
          </div>
        </div>
        <div className="h-20 w-50 flex justify-center items-center">
          <Search />
        </div>
      </div>
    </>
  );
}

export default App;
