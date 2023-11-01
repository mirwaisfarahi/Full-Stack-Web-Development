// HASH TABLE
// In JS hash table DS functionality is provided by Map object. 
// Map is designed to store key-value pairs of any data type for key and value.

// CREATING A MAP: Use Map constructor or new keyword
const hashTable = new Map();

// ADDING AND RETRIEVING VALUES: Use set() method to add key-value pairs to the hash table. 
// Use get() method to retrieve value associated with a specific key.

hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
hashTable.set("key3", "value3");

console.log(hashTable.get("key1")) // output: value1

// CHECKING IF A KEY EXISTS: Use has() method
console.log(hashTable.has("key1")); //true

// DELETING A KEY-VALUE PAIRS: Use delete() method
hashTable.delete("key1");

// ITERATING OVER KEYS AND VALUES
// To iterate use keys() and values() methods. We can use entries() method for both key-values

for(let key of hashTable.keys()) {
    console.log(key)
}

for(let value of hashTable.values()) {
    console.log(value)
}

for(let [key, value] of hashTable.entries()) {
    console.log(key + " -> " +value)
}

// SIZE OF THE HASH TABLE: 
// The number of key-value pairs in hash table can be found using size property.
console.log(hashTable.size) // 2