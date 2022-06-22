
const fetchData = () => {
    console.log('mock http fetchData function is replaced with actual one')
    return Promise.resolve({title: 'delectus aut autem'})
}

exports.fetchData = fetchData;