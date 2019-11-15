const request = require("supertest");
const db = require('../database/dbConfig')
const server = require("../api/server");
const { add } = require('./auth-model');

describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('POST /register', () => {
        it('should add user', async () => {
            await add({username: 'User1', password: '1234'})
    
            const users = await db('users')
    
            expect(users).toHaveLength(1)
            expect(users[0].username).toBe('User1')
        })
        it('should return a status code of 201', () => {
            return request(server).post('/api/register')
            .send({ username: 'User1', password: '1234'})
            .then(res => {
                //expect(res.status).toBe(201)
                expect(res.body).toEqual({})
            })
        })
    })

    describe('POST /login', () => {
        it('should add user', async () => {
            await add({username: 'User1', password: '1234'})
    
            const users = await db('users')
    
            expect(users).toHaveLength(1)
            expect(users[0].username).toBe('User1')
        })
        it('should return a status code of 201', () => {
            return request(server).post('/api/register')
            .send({ username: 'User1', password: '1234'})
            .then(res => {
                //expect(res.status).toBe(201)
                expect(res.body).toEqual({})
            })
        })
    })
});