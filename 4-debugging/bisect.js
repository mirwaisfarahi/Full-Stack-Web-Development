// Bisect example: find element by id

var myArray = [
    { id: 1, name: "bob" },
    { id: 2, name: "dan" },
    { id: 3, name: "barb" },
]


// grab the Array item which matchs the id "2"
var item = myArray.find(item => item.id === 2);

// print
