
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
/* 
let isDragging: boolean = false;
let startX: number, startY: number, endX: number , endY : number;

document.addEventListener("mousedown", function (event) {
  startX = event.pageX;
  startY = event.pageY;
  isDragging = true;
});

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    endX = event.pageX;
    endY = event.pageY;
    console.log(startX, startY);
  }
});

document.addEventListener("mouseup", function (event) {
  console.log("dragging or nah: ", isDragging)
  if (isDragging) {
    isDragging = false;
    const x = event.pageX;
    const y = event.pageY;
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      console.error("Invalid page coordinates:", x, y);
      return;
    }
    const selectedElement = document.elementFromPoint(x, y) as HTMLElement;
    let selectedText = "";
    if (selectedElement != null) {
      selectedText = selectedElement.innerText;
    console.log(selectedText);
    }
    chrome.runtime.sendMessage({
      action: "save-text",
      payload: { text: selectedText, url: window.location.href },
    });
  }
}); */



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
          const url = window.location.href;
          chrome.runtime.sendMessage({ action: "save-text", payload: { text, url } });
        }
        stopHighlighting();
      }
    });
  }
});
