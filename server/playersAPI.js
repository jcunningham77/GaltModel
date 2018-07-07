var https = require('https');
var bodyParser = require('body-parser');

var Player = require('../model/playerModel');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/players', function (req, res) {
        console.log('in the get endpoint for players');
        

        Player.find(function (err, players) {
            if (err) {
                return console.error(err);
            } else {
                // console.log(picks);
                res.status('200').send(players);
            }

        })
    });
}

