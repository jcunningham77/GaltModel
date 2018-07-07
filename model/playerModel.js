var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema(
    {
        Name: {
            type: String
        },
        Team: {
            type: String
        },
        G: {
            type: Number
        },
        PA: {
            type: Number
        },
        AB: {
            type: Number
        },
        H: {
            type: Number
        },
        '2B': {
            type: Number
        },
        '3B': {
            type: Number
        },
        HR: {
            type: Number
        },
        R: {
            type: Number
        },
        RBI: {
            type: Number
        },
        BB: {
            type: Number
        },
        SO: {
            type: Number
        },
        HBP: {
            type: Number
        },
        SB: {
            type: Number
        },
        CS: {
            type: Number
        },
        AVG: {
            type: Number
        },
        OBP: {
            type: Number
        },
        SLG: {
            type: Number
        },
        OPS: {
            type: Number
        },
        wOBA: {
            type: Number
        },
        Fld: {
            type: Number
        },
        BsR: {
            type: Number
        },
        WAR: {
            type: Number
        },
        playerid: {
            type: Number
        }
    }
);


var player = mongoose.model('player', playerSchema);

module.exports = player;
