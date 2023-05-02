console.log("Background script running.");
//keyboard trigger
/* chrome.commands.onCommand.addListener((command) => {
  if (command === "select-element") {
    console.log("Select element command triggered.");
  }
});
 */
chrome.commands.onCommand.addListener((command) => {
  if (command === "select-element") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "select-element" });
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "init") {
    console.log("Content script initialized");
    sendResponse({ type: "init" });
  }
});
//for saving


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "save-text") {
    const { text, url } = message.payload;
    // Saving the selected text and url to local storage
    chrome.storage.local.set({ [url]: text }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Text saved to local storage.");
      }
    });
    chrome.storage.local.get(["url"]).then((result) => {
      console.log("Value currently is " + result.key);
    });
    
  }
});
