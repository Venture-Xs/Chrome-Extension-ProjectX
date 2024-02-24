chrome.runtime.onInstalled.addListener((obj) => {

    chrome.tabs.create({url: "https://www.google.com/"});

    // chrome.tabs.query({
    //     active:true,
    //     currentWindow:true
    // },(tabs)=>{
    //     console.log(tabs[0])
    // })
});