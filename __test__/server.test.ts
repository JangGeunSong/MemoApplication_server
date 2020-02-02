import request from 'supertest'
import http from 'http'
import app from '../server'

describe('tset to server data get successfully', () => {

    let server: http.Server;

    beforeAll((done) => {
      server = http.createServer(app);
      server.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });

    test('should get data', () => {
        request(app)
            .get('/memos')
            .expect(200)
    })

    test('should post data', () => {
        request(app)
            .post('/memo')
            .send({ title: 'hello', description: 'hi', color: '#fff' })
            .expect(200)
    })
    
    test('should delete data', () => {
        request(app)
            .delete('/memo')
            .send({ title: 'title1' })
            .expect(200)
    })
    
    test('should put data', () => {
        request(app)
            .put('/memo')
            .send({ title: 'title1', description: 'hi', color: '#fff' })
            .expect(200)
    })
})
