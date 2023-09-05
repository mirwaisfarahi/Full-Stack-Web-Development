const kitchen = async() => {
    try {
        await abc;
    }
    catch(error) {
        console.log('abc function doesnt exist', error);
    }
    finally {
        console.log("this code always run")
    }
}

kitchen()