

chrome.runtime.onInstalled.addListener((obj) => {

    //chrome.tabs.create({url: "https://www.google.com/"});

    // chrome.tabs.query({
    //     active:true,
    //     currentWindow:true
    // },(tabs)=>{
    //     console.log(tabs[0])
    // })

    // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    //     console.log(request)
    //     console.log(sender)
    //     console.log(sendResponse)
    //     sendResponse({farewell: "goodbye"})

    // })

    // chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {

    //     console.log(tabs[0])

    // })

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        var tab=tabs[0];
        
        console.log("Current tab:", tab);
        console.log("Current tab URL:", tab.url);
        // You can perform further actions with the current tab URL here
      });


})