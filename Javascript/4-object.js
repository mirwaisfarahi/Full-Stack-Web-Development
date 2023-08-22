// Objects:
// objects are just collection of key-value pairs, where values are mapped to their identiferis called keys(properties)

// ADD KEY-VALUE PAIRS TO OBJECT
const city = {
    id: 1,
    name: 'Kabul',
    location: 'Af'
};

city.population = '5 million';
city['famous dish'] = 'Palaw';


// MODIFY AN OBJECT NESTED WITHIN AN OBJECT
const nestedObject = {
    country: 'Afghanistan',
    city: {
        capital: 'kabul',
        population: 5000000,
        food: {
            famouse: 'Palaw',
            other: 'Manto'
        }
    },
    population: '35 million'
};

nestedObject.city.food.famouse = 'Qaboli Palaw';

// Using Objects for Lookups: It can be used when there is a limited range
// of values instead of switch or if/else statement.
const phonoticLookUp = (val) =>
{
    let result = '';

    switch(val) {
        case "a": result = 'print a'; break;
        case "b": result = 'print b'; break;
        case "c": result = 'print c'; break;
    }

    return result;
}
console.log(phonoticLookUp('a'));

// change above code using object
const phonoticLookUpObject = {
    "a": "print a",
    "b": "print b",
    "c": "print c"
};
console.log(phonoticLookUpObject.a);

// Testing objects for Properties:
const checkForProperty = (object, property) => {
    return object.hasOwnProperty(property);
}

let result = checkForProperty({top: 'hat', bottom: 'pants'}, 'pants');
console.log(result);


// ACCESS PROEPRTY NAMES WITH BRACKET NOTATIONS
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) { 
    return foods[scannedItem];
  }

  console.log(checkInventory("apples")); // print 25


// USE THE DELETE KEYWORD TO REMOVE AN OBJECT PROPERTY
delete foods.oranges;

console.log(foods) // { apples: 25, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }


// CHECK IF AN OBJECT HAS A SPECIFIC PROPERTY
// There are two ways to do this: using hasOwnProperty() and in => both techniques will return boolean result.
foods.hasOwnProperty("apples")
"apples" in foods;

// Another example:
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    return userObj.hasOwnProperty("Alan" || "Jeff" || "Sarah" || "Ryan")
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));


// ITERATE OVER THE KEYS OF OBJECT WITH IF--IN STATEMENT
const userss = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
  
    // Only change code above this line
  }
  
  console.log(countOnline(userss));