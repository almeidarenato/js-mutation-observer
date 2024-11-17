const mutationObserver = new MutationObserver((entries) => {
  // Entries object
  console.log(entries);

  // each node "targeted"
  entries.forEach((entry) => {
    console.log("Target", entry.target);
    console.log("Type:", entry.type);
    if (entry.addedNodes.length > 0)
      console.log("Added Node", entry.addedNodes);
    if (entry.removedNodes.length > 0)
      console.log("Removed Node", entry.removedNodes);
  });
});
const observedDiv = document.querySelector("#teste");
const divChildOne = document.querySelector("#child-1");
const config = {
  childList: true, //verify changes on the childNodes
  attributes: true, // verify attribute changes
  attributeOldValue: true, // gets the old value from the attribute
  subtree: true, //verify changes in the children inside the element
  characterData: true, // verify changes on the character
  characterOldData: true, // gets the old value
};

//observe only #teste
mutationObserver.observe(observedDiv, config);
// observe only #child-1 both with the same mutation
mutationObserver.observe(divChildOne, config);

// testing observer
observedDiv.children[0].remove();
divChildOne.innerText = "Test";
// attribute changes ( add "attributes: true" on the config)
divChildOne.setAttribute("test", "new");

// observe actions from events
const button = document.querySelector("#add-node");
button.addEventListener("click", (event) => {
  event.stopPropagation();
  observedDiv.append((document.createElement("p").innerText = "New text"));
});

//observer child properties

const inputField = document.querySelector("#inputfield");
mutationObserver.observe(inputField.childNodes, config);
