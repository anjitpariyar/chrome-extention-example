// append button on parent
console.log("start");

const Alert = (e) => {
  e.preventDefault();
  e.stopPropagation();
  alert("Hello");
};

const Button = (parent) => {
  const button = document.createElement("button");
  button.setAttribute("class", "append-button");
  button.textContent = "Click Me";
  button.addEventListener("click", (e) => {
    Alert(e);
  });
  debugger;
  parent.appendChild(button);
};

const Start = () => {
  // .next-loading .list .b2b-ocms-fusion-comp .offer-img
  debugger;
  const parents = document.querySelectorAll(".offer-about");
  console.log("parents", parents);
  [...parents].forEach((parent) => {
    Button(parent);
  });
};

// It reccieve message after fully loaded
// chrome.runtime.onMessage.addListener(function (request, sender) {
//   Start();
//   console.log("reccive");
// });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  Start();
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
// https://show.1688.com/*
