# Mutation Observer

This tool allows you to easily and efficiently observe any form of DOM changes in javascript

- addedNodes - list the nodes added
- removedNodes -list the removed nodes
- type - what was the type of the node that was removed

## Configs
```js
const config = { 
  childList: true, //verify changes on the childNodes
  attributes: true, // verify attribute changes
  attributeOldValue: true, // gets the old value from the attribute
  subtree: true, //verify changes in the children inside the element
  characterData: true, // verify changes on the character, Doenst work for input
  characterOldData: true, // gets the old value 
};
```