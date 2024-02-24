Chrome.runtime.onInsttalled.addListener(() => {


    chrome.tabs.query({
        active:true,
        currentWindow:true
    },(tabs)=>{
        console.log(tabs[0])
    })
});