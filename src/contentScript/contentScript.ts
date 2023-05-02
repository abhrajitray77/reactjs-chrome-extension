
// Log a message when the page is fully loaded
window.onload = (event) => {
  console.log('Page is fully loaded');
};

chrome.runtime.sendMessage({ type: "init" }, (response) => {
  if (response.type === "init") {
    const extensionId = "gcdheamihdghgigdeefeeflikiohkbmi";
    const url = "chrome-extension://" + extensionId;
    chrome.runtime.sendMessage(extensionId, { action: "select-element", url }, (response) => {
      console.log("Response from background script:", response);
    });
  }
});

let selectedElement: HTMLElement | null = null;

function highlightElement(event) {
  const element = event.target;
  if (selectedElement !== element) {
    if (selectedElement) {
      selectedElement.style.outline = "";
    }
    selectedElement = element;
    selectedElement.style.outline = "2px solid red";
  }
  event.stopPropagation();
}

function stopHighlighting() {
  if (selectedElement) {
    selectedElement.style.outline = "";
    selectedElement = null;
  }
  document.removeEventListener("mouseover", highlightElement);
  document.removeEventListener("keydown", stopHighlighting);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "select-element") {
    selectedElement = null;
    document.addEventListener("mouseover", highlightElement);
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        stopHighlighting();
      }
    });
    document.addEventListener("click", function(event) {
      if (event.button === 0) {
        if (selectedElement) {
          const text = selectedElement.innerText;
    //      const elemid = selectedElement.id;
          const url = window.location.href;
          chrome.runtime.sendMessage({ action: "save-text", payload: { text, url /*, elemid  */} });
        }
        stopHighlighting();
      }
    });
  }
});
