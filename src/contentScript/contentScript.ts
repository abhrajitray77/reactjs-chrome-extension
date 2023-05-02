
// Log a message when the page is fully loaded
window.onload = (event) => {
  console.log('Page is fully loaded');
};

let selectedElement: HTMLElement | null = null;

let isDragging: boolean = false;
let startX: number, startY: number, endX: number , endY : number;

chrome.runtime.sendMessage({ type: "init" }, (response) => {
  if (response.type === "init") {
    // Now it's safe to send messages to the background script
    const extensionId = "gcdheamihdghgigdeefeeflikiohkbmi";
    const url = "chrome-extension://" + extensionId;
    chrome.runtime.sendMessage(extensionId, { action: "select-element", url }, (response) => {
      console.log("Response from background script:", response);
    });
  }
});

document.addEventListener("mousedown", function (event) {
  startX = event.pageX;
  startY = event.pageY;
  isDragging = true;
});

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    endX = event.pageX;
    endY = event.pageY;
  }
});

document.addEventListener("mouseup", function (event) {
  if (isDragging) {
    isDragging = false;
    const selectedElement = document.elementFromPoint(
      endX,
      endY
    ) as HTMLElement;
    const selectedText = selectedElement.innerText;
    console.log(selectedText);
    chrome.runtime.sendMessage({
      action: "save-text",
      payload: { text: selectedText, url: window.location.href },
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "select-element") {
    selectedElement = null;
    document.addEventListener("mouseover", highlightElement);
  }
});

function highlightElement(event: MouseEvent) {
  const element = event.target as HTMLElement;
  if (selectedElement !== element) {
    if (selectedElement) {
      selectedElement.style.outline = "";
    }
    selectedElement = element;
    selectedElement.style.outline = "2px solid red";
  }
  event.stopPropagation();
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && selectedElement) {
    selectedElement.style.outline = "";
    selectedElement = null;
  }
});