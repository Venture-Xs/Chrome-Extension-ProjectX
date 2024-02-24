chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "youtubeVideoLink") {
      document.getElementById("youtube-link").textContent = message.link;
      console.log("message")
    }
  });