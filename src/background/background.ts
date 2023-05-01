console.log("Background script running.");
chrome.runtime.sendMessage('I am loading content script', function(response) {
  console.log(response);
});

/* chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTab) => {
    if (currentTab.url.startsWith("http")) { // check if URL starts with http or https
      chrome.commands.onCommand.addListener((command) => {
        if (command === "select-element") {
          console.log("Select element command triggered.");
          chrome.tabs.executeScript(
            tab.tabId,
            { file: "contentScript.js", allFrames: true },
            (results) => {
              const [result] = results;
              if (chrome.runtime.lastError || !result || chrome.runtime.connect) {
                console.error('Error loading script:', chrome.runtime.lastError, result, chrome.runtime.connect);
              } else {
                chrome.tabs.sendMessage(tab.tabId, { action: "select-element" });
              }
            }
          );
        }
      });
    }
  });
});
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "init") {
    console.log("Content script initialized");
    sendResponse({ type: "init" });
  }
});

chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.action === "save-text") {
    const { text, url } = message.payload;
    // Saving text and url to local storage
    chrome.storage.local.set({ [url]: text }, () => {
      console.log("Text saved to local storage.");
    });
  }
});
