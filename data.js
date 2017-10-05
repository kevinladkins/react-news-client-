var obj = {
  2: {
    dataobject: "data",
    comments: [
      "comment one",
      "comment two"
    ]
  },

  3: {
    dataobject: "data",
    comments: [
      "comment one",
      "comment two"
    ]
  },

}

var { 2: { comments } } = obj;

console.log(comments)
