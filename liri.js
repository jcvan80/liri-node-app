require("dotenv").config();
var axios = require("axios");
var moment = require("moment")
var fs = require("fs");

var usrInput = process.argv;
var cmd = usrInput[2];
var usrCMD = process.argv.slice(3).join(" ");;


   if (cmd === "movie-this") {
    if (!usrCMD) {
        mrNBDY()
    }
    else{
        movieSearch()
    }
    
   }

function movieSearch() {
    var queryOMBUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + usrCMD + "&type=movie&y=&plot=full&tomatoes=true&r=json";

axios.get(queryOMBUrl).then(
    function (response) {

        var movieData = [
            "Movie Title:" + response.data.Title,
            "Year:" + response.data.Year,
            "IMDB Rating:" + response.data.imbdRating,
            "Rotten Tomatoes Rating:" + response.data.Ratings[1].Value,
            "Production Country:" + response.data.Country,
            "Movie Language:" + response.data.Language,
            "Actors:" + response.data.Actors,
            "Plot:" + response.data.Plot
        ].join("\n")
        console.log(movieData)
    }
 )
}

function mrNBDY() {
    var movieData = [
        'Movie Title: Mr. Nobody',
        'Year: 2009',
        'IMDB Rating: 7.8',
        'Rotten Tomatoes Rating: 67%',
        'Production Country: Belgium, Germany, Canada, France, USA, UK',
        'Movie Language: English, Mohawk',
        'Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham',
        'Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn\'t choose, anything is possible.'
    ].join("\n")
    console.log(movieData)
}

if (cmd === "spotify-this") {
    if(!usrCMD) {
        theSign()
    }
    else {
        spotifySearch()
    }
}

function theSign() {
    var songData = [
        "Song Title: The Sign",
        "Artist: Ace of Base",
        "Album Name: Happy Nation",
        "Spotify URL:  ://open.spotify.cohttpsm/album/37UgOnkBN4ZfY1nBoSCL9L"
    ].join("\n")
}console.log(songData)

function spotifySearch() {
    spotify.search({
        type: 'track',
        query: usrCMD
    },
    function(err, response){
        if (err) {
            console.log("error: " + err);
            return
        }
        var keyTrack = response.tracks.items[0] 
        var songData = [
            "Song Title:" + keyTrack.name,
            "Artist(s):" + keyTrack.artists[0].name,
            "Album Name:" + keyTrack.album.name,
            "Spotify URL:" + keyTrack.external_urls.spotify
        ].join("\n")
        console.log(songData)
    }
    )
}

if (cmd === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log("Error Occurred:" + err);
        }

        var songData = [
            "Song Title:" + keyTrack.name,
            "Artist(s):" + keyTrack.artists[0].name,
            "Spotify URL:" + leyTrack.eternal_urls.spotify
        ].join("\n")
        console.log(songData) 

    })
    
}
