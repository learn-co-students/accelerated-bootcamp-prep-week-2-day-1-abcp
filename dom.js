
var document = [
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

/*var childrenArray =[];
document.forEach(function getChildren(element, index){
  childrenArray.push(element["children"]) ;
})*/

var childrenArray =[];
childrenArray = document[0].children[0].children

console.log(childrenArray);
