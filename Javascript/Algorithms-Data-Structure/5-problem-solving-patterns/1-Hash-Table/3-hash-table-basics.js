// USE OF OBJECTS AS KEYS IN HASH TABLE
/**
 * Objects can be used as a key in hash table (also known as object or dictoinary) for various
 * purposes:
 * 1. Grouping and Aggregation: objects can be used to group related data.
 * 2. Efficient Lookup: Objects in JavaScript provide constant-time lookup for values based on 
      their keys. When you use an object as a key in a hash table, the object's hash value is 
      calculated, which is used to efficiently locate the associated value in the underlying 
      data structure. This makes objects suitable for scenarios where you need to quickly 
      access values based on their corresponding keys.
   3. Unique Identifiers: Objects in JavaScript can be used as unique identifiers. 
      Since objects in JavaScript are reference types, each object has a unique identity. 

 */

// Example: Aggregation => we have an online shopping application that tracks the inventory 
// of products. Each product has a unique identifier, such as a SKU (Stock Keeping Unit). 
// We can use a hash table with objects as keys to efficiently manage the inventory.

// create a hash table to store the inventory data
//const inventory = {} // or using Map constructor
const inventory = new Map();

// define a product class
class Product {
    constructor(sku, name, price) {
        this.sku = sku; // Stock Keeping Unit
        this.name = name;
        this.price = price;
    }
}

// Create product objects
const product1 = new Product('SKU123', 'T-shirt', 19.99);
const product2 = new Product('SKU456', 'Jeans', 39.99);
const product3 = new Product('SKU789', 'Shoes', 49.99);

// Associate products with their SKUs in the inventory hash table
// using plain object method
// inventory[product1.sku] = product1;
// inventory[product2.sku] = product2;
// inventory[product3.sku] = product3;

// using Map constructor
inventory.set(product1.sku, product1);
inventory.set(product2.sku, product2);
inventory.set(product3.sku, product3);

console.log(inventory);
// using plain js object
// console.log(inventory['SKU123']);

// using Map constructor
console.log(inventory.get('SKU123'))
