import request from 'supertest'
import http from 'http'
import app from '../server'

// 서버 데이터 패싱 처리 테스트
describe('tset to server data get successfully', () => {

    let server: http.Server;
    // 이 테스트를 진행하기 위해 서버를 먼저 선언한 후 각 테스트가 진행되기 전 서버를 만들고 테스트가 진행된 후 서버를 닫는 행동을 반복함 

    beforeAll((done) => {
      server = http.createServer(app);
      server.listen(done);
    });
    
    afterAll((done) => {
        server.close(done);
    });

    // 각 테스트는  promise를 통해 비동기 처리를 하는 방식을 고수해야 함 이는 클라이언트 단에서 데이터를 처리할때 비동기 방식으로 처리해
    // 컴포넌트 단위의 UI만 그려질때 대기하고 전체 페이지는 정상적으로 로드될 수 있도록 하기 위함임

    // 모든 테스트는 우선적으로 성공인지를 확인하는 STATUS CODE인 200을 리턴하는지만 테스트 하였음
    // 각 테스트의 경우 API 서버이므로 async 로 처리하여야 open handle 이슈를 막을 수 있음. 서버 내부에 자체적인 listen의 경우 그냥 두더라도,
    // 각 테스트 단위에서는 이를 막기 위한 처리가 필요함.
    test('should get data', async () => {
        request(app)
            .get('/memos')
            .expect(200)
    })

    test('should post data', async () => {
        request(app)
            .post('/memo')
            .send({ title: 'hello', description: 'hi', color: '#fff' })
            .expect(200)
    })
    
    test('should delete data', async () => {
        request(app)
            .delete('/memo')
            .send({ title: 'title1' })
            .expect(200)
    })
    
    test('should put data', async () => {
        request(app)
            .put('/memo')
            .send({ title: 'title1', description: 'hi', color: '#fff' })
            .expect(200)
    })
})
