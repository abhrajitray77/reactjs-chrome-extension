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
    const id = Date.now().toString(); // Generate a unique id based on the current time
    console.log("Saving text:", text, "from url:", url, "with id:", id );
    // Saving the selected text, url and id to local storage
    chrome.storage.local.set({ [id]: { text, url, id } }, () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Text saved to local storage.");
      }
    });
    chrome.storage.local.get([id], (result) => {
      console.log("Value currently is ", result);
    });
  }
});


