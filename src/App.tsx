//import { useState } from 'react'

import Search from "./utils/Search";
import { Button } from "./components/ui/button";
import { DropDown } from "./utils/DropDown";
import { SettingButton } from "./utils/SettingButton";
import { useEffect } from "react";
import { ListBuilder } from "./utils/ListViewBuilder";

function App() {
  //const [count, setCount] = useState(0)
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      console.log("Current tab:", tab);
      console.log("Current tab URL:", tab.url);
      // You can perform further actions with the current tab URL here
    });
  }, [])
  let data=[
    {
      "id":1,
      "title":"Summary 1",
      "content":"Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "id":2,
      "title":"Summary 2",
      "content":"Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      "id":3,
      "title":"Summary 3",
      "content":"Yes. It adheres to the WAI-ARIA design pattern."
    }
  ];
  

  return (
    <>
      <div className=" h-[24rem] ">
        {/*Header */}
        <div className="flex justify-center h-22 p-5 bg-slate-400 ">
          <h1 className="text-4xl font-serif italic  text-black-400 p-2">
            CAITLYN
          </h1>

          <div className=" flex justify-center h-18 py-2 px-1">
            <DropDown />
          </div>

          <div className="flex justify-center h-18 w-18  py-2">
            <SettingButton />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {/*Summarizer */}
          <div className="h-15 flex justify-center items-center bg-slate-50 p-2 ">
            <Button variant="outline">Summarize</Button>
          </div>

          {/*Search */}
          <div className="flex justify-evenly">
            <Search />
          </div>
        </div>

        {/* Footer
        <div id="youtube-link"></div>
        <script src="popup.js"></script> */}

        {/*List Builder */}
        <div className="h-40 flex-col  overflow-auto scrollbar-hide mt-5 p-2 ">
          {
          data.map((item)=>{
            return (
              <div className="h-30 p-2 rounded bg-slate-50">
                  
                  <ListBuilder title={item.title} content={item.content} key={item.id}/>
              </div>
              
            )
          })
          }

        </div>

      </div>
    </>
  );
}

export default App;
