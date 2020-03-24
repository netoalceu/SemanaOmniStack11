/*
Metodos HTTP
GET: busca/ Lista uma informação do Backend
POST: Cria uma informação no Backend
PUT: Altera uma informação no Backend
DELETE: Apaga uma informação no Backend

Request Body: Corpo da Requisição, utilizado p crial ou alterar recursos


Tipos de Parametros
Query Params: Parametros nomeados na rota apos "?"(Filtros, paginação)
Exemplos: 
http://localhost:3333/users?name=Diego
http://localhost:3333/users?page=2&nome=Diego&Idade=25

Route Params: Parametros para identificar recursos
Exemplos: 
http://localhost:3333/users/1

// HELLO WORLD
//app.get('/', (request, response) => {
//    return response.send('Hello World');
//});

// Query Parameters
//app.get('/users', (request, response) => {
//    const params = request.query;
//    console.log(params);

//Route Params
//app.get('/users/:id', (request, response) => {
//    const params = request.params;
//    console.log(params);

// Post com request Body
app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);
          
//Response
    return response.json({
        evento:'semana OmniStack 11.0',
        aluno: 'Alceu Rosa Neto'
    });
});
*/