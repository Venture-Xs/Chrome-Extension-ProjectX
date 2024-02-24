//import { useState } from 'react'

import { Button } from "./components/ui/button";
import { DropDown } from "./utils/DropDown";
import { SettingButton } from "./utils/SettingButton"



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

     <div className="h-90px bg-slate-300 ">

      {/*Header */}
      <div className="flex justify-evenly h-22 p-5 bg-slate-400 ">
        <h1 className="text-4xl font-serif italic  text-black-400 p-2">CAITYLN</h1>

        <div className=" flex justify-center h-18 w-60 p-2">
            <DropDown/>
        </div>

        <div className="flex justify-center h-18 w-18  p-2">
          <SettingButton/>
        </div>
      </div>
      
      {/*Summarizer */}
      <div className="h-15 flex justify-center items-center ">
          <Button variant="outline" className="w-400">Summarize</Button>
      </div>

     </div>
    </>
  )
}

export default App
