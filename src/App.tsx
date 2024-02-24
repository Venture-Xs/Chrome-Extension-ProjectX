//import { useState } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
// import Search from "./utils/Search";
// import { Button } from "./components/ui/button";
import { DropDown } from "./utils/DropDown";
import { SettingButton } from "./utils/SettingButton";
import { Summarize } from "./pages/Summarize";

type summaryType = {
  summary_of_section: string,
  time_stamp: string
  title_of_section: string
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Chat } from "./pages/Chat";


function App() {
  //const [count, setCount] = useState(0)
  const [summary, setSummary] = useState<summaryType[]>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Try to get the summary data from local storage
    try {
      getURL();
      chrome.storage.session.get(['sum'], (result) => {

        if (result.sum) {
          const sum = JSON.parse(result.sum);
          console.log(sum);
          setSummary(sum);
          setLoading(false);
        }
      });
    } catch (e) {
      console.log(e)
    }

  }, []);

  const getURL = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = 'green';
        return window.location.href;
      }
    });
    const url = results[0].result;
    setUrl(url!);
  }

  const getSummary = async () => {
    setLoading(true);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        document.body.style.backgroundColor = 'green';
        return window.location.href;
      }
    });
    const url = results[0].result;
    setUrl(url!);
    const postData = {
      url: url,
      isQuery: "False",
      query: "",
      generateTest: "False"
    }
    const res = await axios.post("https://613d-103-119-241-244.ngrok-free.app/chat_bot", postData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const sum = res.data.reply
    setSummary(res.data.reply);
    chrome.storage.session.set({ sum: JSON.stringify(sum) });
    setLoading(false);
  }


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

        {/* <div className="flex flex-col gap-1"> */}
        {/*Summarizer */}
        {/* <div className="h-15 flex justify-center items-center bg-slate-50 p-2 ">
            <Button variant="outline" onClick={getSummary}>Summarize</Button>
          </div> */}

        {/*Search */}
        {/* <div className="flex justify-evenly">
            <Search />
          </div> */}
        {/* </div> */}

        {/* Footer
        <div id="youtube-link"></div>
        <script src="popup.js"></script> */}

        {/*List Builder */}

        <div >
          <Tabs defaultValue="Summarize" className="w-[400px]">

            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="Summarize" onClick={getSummary} >Summary</TabsTrigger>
              <TabsTrigger value="Chat" >Chat</TabsTrigger>
            </TabsList>

            <TabsContent value="Summarize">
              <Summarize loading={loading} summary={summary} />
            </TabsContent>
            <TabsContent value="Chat">
              <Chat url={url} />
            </TabsContent>
          </Tabs>

        </div>


      </div>
    </>
  );
}

export default App;
