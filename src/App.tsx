//import { useState } from 'react'


import { Button } from "./components/ui/button";
import { DropDown } from "./utils/DropDown";
import { SettingButton } from "./utils/SettingButton"



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>

     <div className="bg-red-300 h-[24rem] ">

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
      <div className="h-15 flex justify-center items-center bg-slate-50 p-2 ">

        <div className="h-10 w-100">
          <Button variant="outline" >Summarize</Button>
        </div>   
      </div>



     </div>
    </>
  )
}

export default App
