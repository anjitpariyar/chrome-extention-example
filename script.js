// append button on parent
const Button = (parent) => {
  const button = document.createElement("button");
  button.setAttribute("class", "append-button");
  button.textContent = "Click Me";
  console.log(button);
  console.log(parent);
  // debugger;
  parent.appendChild(button);
};

const Start = () => {
  // .next-loading .list .b2b-ocms-fusion-comp .offer-img
  const parents = document.querySelectorAll(".ch-main-nav.fd-clr");
  [...parents].forEach((parent) => {
    Button(parent);
  });
};

// It reccieve message after fully loaded
chrome.runtime.onMessage.addListener(function (request, sender) {
  Start();
});
