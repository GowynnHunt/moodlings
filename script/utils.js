function create(elemName, attrObj) {
  const element = document.createElement(elemName);
  for (const attribute in attrObj) {
    switch (attribute) {
      case "events":
        const events = attrObj[attribute]; // Object
        for (const event in events) {
          element.addEventListener(event, events[event]);
        }
        break;

      case "textContent":
        const textContent = attrObj[attribute];
        element.textContent = textContent;
        break;

      case "children":
        const children = attrObj[attribute]; // Array
        for (const child of children) {
          element.appendChild(child);
        }
        break;

      default:
        element.setAttribute(attribute, attrObj[attribute]);
        break;
    }
  }
  return element;
}

// Example of usage
// const el = create("div", {
//   id: "foo",
//   class: "modal flex-col-rev",
//   style: "color: red; border-radius: 1em;",
//   events: {
//     click: () => console.log("Clicking!"),
//     mouseover: () => console.log("Hovering!"),
//   },
//   children: [
//     create("p", { textContent: "Hello World!" }),
//     create("ol", {
//       children: [create("li", { textContent: "I'm a list element!" })],
//     }),
//   ],
// });

export { create };
