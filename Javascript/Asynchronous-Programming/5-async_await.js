const toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping would you love?"));
        }, 3000)

    })
}

const kitchen = async() => {
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");
    
    await toppings_choice();

    console.log(" D ");
    console.log(" E ");
}

kitchen();
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")

/**
 * Output:
 A 
 B 
 C 
doing the dishes
cleaning the tables
taking orders
which topping would you love?
 D 
 E 
 */