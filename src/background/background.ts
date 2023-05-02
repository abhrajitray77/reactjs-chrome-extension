console.log("Background script running.");

chrome.commands.onCommand.addListener((command) => {
  if (command === "select-element") {
    console.log("Select element command triggered.");
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "init") {
    console.log("Content script initialized");
    sendResponse({ type: "init" });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "save-text") {
    const { text, url } = message.payload;
    // Saving text and url to local storage
    chrome.storage.local.set({ [url]: text }, () => {
      console.log("Text saved to local storage.");
    });
  }
});
