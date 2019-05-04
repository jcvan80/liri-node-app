require("dotenv").config();

let request = require("request");

//Initialize Spotify 
const spotify = require("node-spotify-api")

//OMBD API
let ombd = ("keys.ombd")

let fs = require('fs');

//Import API keys
let keys = require("./keys.js");

//Moment require
const moment = require("moment");

//Spotify key
const Keyspotify = spotKey("keys.spotify");

//Bands in town API
let bandsInTown = ("keys.bandsintown");

let cmd = process.argv[2];
let secondcmd = process.argv[3];

switch (cmd) {
    case "movie-this":


        if (secondcmd === undefined) {
            secondcmd = "Mr. Nobody";
        }
        request("http://www.omdbapi.com/?t=${argument}&y=&plot=short&apikey=trilogy" , function (error, response, body) {
            let movieResult = JSON.parse(body);

            console.log("Movie Title:" + result.Title);
            console.log("Released:" + result.Released);
            console.log("Rating:" + result.imbdRating);
            console.log("Rotten Tomatoes Rating:" + result.Ratings[1]);
            console.log("country:" + result.Country);
            console.log("Language:" + result.Language)
            console.log("Plot:" + result.Plot);
            console.log("Actors:" + result.Actors);

        
        });

        break;
    case "spotify-this":
            if (secondcmd === undefined) {
                secondcmd = "The Sign";
            }
            spotify.search({
                type: "track", query: cmd, limit: 1 })
                .then(function (response) {
                    var
                }
            
            

            
            



            










}