//attempt to know the load of the page is done
chrome?.tabs?.onUpdated?.addListener(function (tabId, changeInfo) {
  if (changeInfo?.status == "complete") {
    // do your things
    // chrome?.tabs?.sendMessage(tabId, { load: "complete" });
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "hello" },
        function (response) {
          console.log(response.farewell);
        }
      );
    });
  }
});
