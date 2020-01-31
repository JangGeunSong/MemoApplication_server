import request from 'supertest'
import app from '../server'

describe('tset to server data get successfully', () => {
    test('should get data', () => {
        request(app).get('/memos').expect(200)
    })
})
