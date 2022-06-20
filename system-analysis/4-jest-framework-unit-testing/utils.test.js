jest.mock('./http.js')

const {loadTitle} = require('./utils.js');

test('print title', () => {
    loadTitle().then(title => {
        expect(title).toBe('DELECTUS AUT AUTEM')
    })
})