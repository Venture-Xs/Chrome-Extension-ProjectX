//import { useState } from 'react'

import { DropDown, } from "./utils/DropDown"



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-300 w-200 bg-slate-300">
      <div className="flex justify-evenly h-24 p-5 bg-slate-400 ">
        <h1 className="text-4xl font-bold text-black-400 ">Sigma Buddy</h1>

        <div className=" flex justify-center h-18 w-32 bg-red-500 p-2">
            <DropDown/>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
