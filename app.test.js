const supertest = require('supertest');
const app = require('./app');
const request = supertest(app)

describe('Endpoint testing', function () {
    it('GET 200 on a single comments endpoint', async function(done) {
        request
            .get('posts/1/comments')
            .expect(200)
            .end((err, res) => {
                done.end()
            })
    })
    it('GET 200 on a single photos endpoint', async function(done) {
        request
            .get('/albums/1/photos')
            .expect(200)
            .end((err, res) => {
                done.end()
            })
    })
    it('GET 200 on an single albums endpoint', async function(done) {
        request
            .get('/users/1/albums')
            .expect(200)
            .end((err, res) => {
                done.end()
            })
    })
    it('GET 200 on a single todo endpoint', async function(done) {
        request
            .get('users/1/todos')
            .expect(200)
            .end((err, res) => {
                done.end()
            })
    })
    it('GET 200 on a single post endpoint', async function(done) {
        request
            .get('/users/1/posts')
            .expect(200)
            .end((err, res) => {
                done.end()
            })
    })
    it('Post', async function(done) {
        const comment = {
            method: 'POST',
            body: JSON.stringify({
                "postID" : 1000,
                "id" : 89,
                "name" : "Widdle Waddle",
                "email" : "widdles@gmail.com",
                "body" : "agasfgsadasdakjsdkasdklasdlasdj"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        await request
            .post('/comments')
            .send(comment)
    })
})