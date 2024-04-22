const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const token = "12345"
const datosprueba = {
    nombre:"vanessa", 
    celular:"3153049974"
}
const userId = 3;

describe('GET /api/players', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/players').send();
        expect(response.statusCode).toBe(200);
        // expect(response.headers['Content-Type']).toEqual(
        //     expect.stringContaining("json")
        // );
    });
    describe('GET /api/players', () => {
        
    
        test('muestra un arreglo', async () => {
            const response = await request(server.app).get('/api/players').send();
            expect(response.body).toBeInstanceOf(Object);
        });
    });
    describe('GET /api/players', () => {

    test('Estado correcto', async () => {
        const response = await request(server.app).get('/api/players').send();
        expect(response.body).toBeInstanceOf(Object);
    });
});
    // test('respuesta json', async () => {
    //     const response = await request(server.app).get('/api/users').send();
    //     // expect(response.statusCode).toBe(200);
    //     expect(response.headers['Content-Type']).toEqual(
    //         expect.stringContaining("json")
    //     );
    // });
});

describe("post /api/players", () => {

    test("Crear Futbolista", async () => {
        return request(server.app)
        .post('/api/players')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre;
            
        })
    });

    test("Se puede crear Futbolista", async () => {
        return request(server.app)
        .post('/api/players')
        .send(datosprueba)
        .expect(201)
    });
})


describe("put /api/players/:id", () => {

    test("Actualizacion Futbolista", async () => {
        return request(server.app)
        .put(`/api/players/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })

    })
    test("Se puede actualizar Futbolista", async () => {
        return request(server.app)
        .put('/api/players')
        .send(datosprueba)
        .expect(404)
    });
})

describe("Delete /api/players/:id", () => {

    test("Eliminacion Futbolista", async () => {
        return request(server.app)
        .delete(`/api/players/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


test("Se puede eliminar un Futbolista", async () => {
    return request(server.app)
    .delete(`/api/players/${userId}`)
    .set('Authorization', 'Bearer ' +token)
        .expect(410)
});
