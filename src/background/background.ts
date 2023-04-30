chrome.runtime.onInstalled.addListener(() => {
    chrome.commands.onCommand.addListener((command: string) => {
      console.log(`command triggered is ${command}`)
    })
  })
  