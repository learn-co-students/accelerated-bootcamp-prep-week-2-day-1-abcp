var myDocument = [ //changed var to myDocument since document is restricted
  {
    tagName: "div",
    children: [
      {
        tagName: "ul",
        children: [
          {tagName: "li", value: "list item 1"},
          {tagName: "li", value: "list item 2"},
          {tagName: "li", value: "list item 3"}
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "form",
        children: [
          {
            tagName: "input",
            type: "text",
            value: "name"
          },
          {
            tagName: "input",
            type: "submit"
          }
        ]
      }
    ]
  },
  {
    tagName: "div",
    children: [
      {
        tagName: "p",
        value: "I'm a paragraph"
      }
    ]
  }
]

myDocument[0].children[0].children;
/*
or chain it
var bigChildren = myDocument[0];
var littleChildren = bigChildren.children[0]
var tagNames = children*/


myDocument[2].children[0].tagName;
/*This will access the "p" in the last div*/

myDocument[1].children[0].children;
