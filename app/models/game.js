const axios = require('axios');
const baseUrl = "https://statsapi.web.nhl.com/api/v1";


module.exports = function(app){
    app.get('/api/games', function(req, res){
        getGames('2018-01-09').then(data => {
            res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        });
    });

    app.get('/api/game/:id', function(req, res){
        getGames('test', req.params.id).then(data => {
            res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    });
}

function getGames(date, id=false) {
    if (id){
        return getEndpoint(`/game/${id}/boxscore`).then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err));
    } else {
        return getEndpoint(`/schedule?date=${date}`).then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err));
    }
}

function getEndpoint(subUrl) {
    var url = baseUrl + subUrl;
    console.log(url)
    return axios.get(url).then(response => response.data)
}

