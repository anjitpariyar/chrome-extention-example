//attempt to know the load of the page is done
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == "complete") {
    // do your things
    chrome.tabs.sendMessage(tabId, { load: "complete" });
  }
});
