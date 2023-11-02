// DISADVANTAGES OF HASH TABLE
// 1. Order of Iteration: Hash tables do not guarantee a specific order when iterating over 
// their keys or values.

const inventory = {};

class Product {
    constructor(sku, name, price) {
        this.sku = sku; // Stock Keeping Unit
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product('SKU123', 'T-shirt', 19.99);
const product2 = new Product('SKU456', 'Jeans', 39.99);
const product3 = new Product('SKU789', 'Shoes', 49.99);

// inventory[product1.sku] = product1;
inventory['SKU123'] = 'Product 1';
inventory['SKU456'] = 'Product 2';
inventory['SKU789'] = 'Product 3';

console.log(Object.values(inventory)); // Output: ['Product 1', 'Product 2', 'Product 3']
console.log(Object.keys(inventory)); // Output: ['SKU123', 'SKU456', 'SKU789']

// When iterating over the keys or values of the hash table, the order of iteration is not 
// guaranteed. The output may vary between different JavaScript engines or runtime environments.

// 2. Key Mutation:
const hashTable = {};
const key = {id: 1};
inventory[key] = value1;

console.log(inventory[key]); // Output: 'Value 1'

key.id = 2;

console.log(inventory[key]); // Output: undefined

// when the id property of the key object is modified, the hash value of the key changes. 
// As a result, the associated value can no longer be located, and accessing inventory[key] 
// returns undefined.

// solution to above issue
// Update the key
const updatedKey = { id: 2 };
inventory[updatedKey] = inventory[key];
delete inventory[key];

console.log(inventory[updatedKey]); // Output: 'Value 1'
