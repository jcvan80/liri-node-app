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


var songData = [

    "Song Title: " + keyTrack.name,
    "Artist(s): " + keyTrack.artists[0].name,
    "Album Name: " + keyTrack.album.name,
    "Spotify URL: " + keyTrack.external_urls.spotify
].join("\n")

    


switch (cmd) {
    case "spotify-this":
    spotify.search({
        type: "track",
        query: cmd
    },
    function(err, data){
        if (err) {
            return console.log(`Error Occurred:` + err);
            var songData = [

            "Song Title: The Sign",
            "Artist(s): Ace of Base",
            "Album Name: Happy Nation",
            "Spotify URL: https://open.spotify.com/album/0nQFgMfnmWrcWDOQqIgJL7"
        ].join("\n")
        }
        const trackSpotify = response.tracks.items[0]
        const artist = [];

    }
    )


        
            
            

            
            



            










}