
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


//grab the list of children that live at the first ul node

document[0]
// would return the first whole object.


document[0].children;
// would return the array under the children key

let y = document[0].children[0].children;
console.log(y);


// How would you
//access all of the children of the first div's ul node?

document[0]
let x = document[0].children;
console.log(x);


//access the value of the p tag that is the child of the last div
document[2]
let z = document[2].children;
console.log(z);


//list the children of the second div

document[1]
let s = document[1].children;
console.log(s);
