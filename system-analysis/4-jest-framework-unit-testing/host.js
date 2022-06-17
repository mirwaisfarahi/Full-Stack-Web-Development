class Host {
    static greeting = (msg) => {
        return msg
    }

    greetingSomeBody = (name) => {
        
        // if(name) return 'hello ' +name
        // else return 'hello stranger'
        // refactor above code
        return 'hello ' + (name || 'stranger')
    }
}

module.exports = Host