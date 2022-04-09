// All about observing the loading state
const loaderparent = document.querySelector(".next-loading");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const mutationCallback = function (mutationsList, observer) {
  console.log("mutationsList", mutationsList);
  console.log("observer", observer);
  // Use traditional 'for loops' for IE 11
  for (const mutation of mutationsList) {
    //
    if (mutation.type === "childList") {
      // not having loading class means data is already appended
      if (!loaderparent.classList.contains("loading")) {
        // disconnecting the observer
        debugger;
        cardParentGrab();
      }
    }
    // only if you need to check on attribute change
    // else if (mutation.type === "attributes") {
    //   console.log("The " + mutation.attributeName + " attribute was modified.");
    // }
  }
};

// Create an observer instance linked to the callback function
const mutationObserver = new MutationObserver(mutationCallback);

// Start observing the target node for configured mutations
mutationObserver.observe(loaderparent, config);
// end of observation function

// function that grab the card parent
let cardParent;
const cardParentGrab = () => {
  mutationObserver.disconnect();
  mutationObserver.takeRecords();
  // no repeat assign
  if (!cardParent) {
    cardParent = document.querySelectorAll(
      ".next-loading .list .b2b-ocms-fusion-comp .offer-img"
    );
    console.log("parent", cardParent);
  }
};
