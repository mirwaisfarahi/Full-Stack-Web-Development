let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

const production = () => {
    setTimeout(() => {
        console.log("Start Production")
        setTimeout(() => {
            console.log("Fruit has been chopped")
            setTimeout(() => {
              console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000)  
            }, 3000)
        }, 2000)
    }, 1000)
};

const order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production();
    }, 2000)
};

order(3, production);