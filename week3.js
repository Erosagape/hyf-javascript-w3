//Item array removal
const numbersArray=[1,2,3,4,5,6,7,8,9,10];
const randomNumber=parseInt(Math.random()*11);

for(let c=0;c< numbersArray.length;c++){
    let numbersToRemove=1;
    if(numbersArray[c]==randomNumber){
        numbersArray.splice(c,numbersToRemove);
    }
}
console.log("Remove value="+ randomNumber+ " result ="+ String(numbersArray));

//Series duration in my life
const seriesDurations=[
{
    title:"Game of thrones",
    days:3,
    hours:1,
    minutes:0,
},
{
    title:"Sopranos",
    days:3,
    hours:14,
    minutes:0,
},
{
    title:"The wire",
    days:2,
    hours:12,
    minutes:0,
}
];
const minutesInMyLife=(80*(24*365))*60;
let percentInMyLife=0;
for(let serie of seriesDurations){
    let minutesForSerie=(((serie.days*24)+serie.hours)*60)+serie.minutes;
    let percentForSerie=(minutesForSerie*100/minutesInMyLife).toFixed(3);
    percentInMyLife+=Number(percentForSerie);
    console.log(serie.title + " took "+ percentForSerie + "% of my Life \n");
}
console.log("In total that is "+ percentInMyLife + "% of my Life \n");
//My Favorite songs
const songDatabase=[
    {
        songId:1,
        title:"My Baby",
        artist:"Socky Socks"
    },
    {
        songId:2,
        title:"3 Nails in woods",
        artist:"The Carpenters"
    },
    {
        songId:3,
        title:"Blacker than black",
        artist:"Instant coffee"
    },
    {
        songId:4,
        title:"When is enough too little?",
        artist:"The spies girls"
    }
];
const myPlaylist=[];
function addSongToDataBase(song){
    song.songId=songDatabase.length+1;
    songDatabase.push(song);
    return songDatabase.length;
}
function getSongByTitle(title){
    for(song of songDatabase){
        if(song.title==title){
            return song;
        }
    }
    return;
}
addSongToDataBase({ title:"Let it be",artist:"Ayawaddy"});
let mySong=getSongByTitle("Let it be");
console.log(mySong);

function addSongToMyPlaylist(title){
    let song=getSongByTitle(title);
    if(song!==undefined){
        myPlaylist.push(song);
    }
}
addSongToMyPlaylist("Let it be");
addSongToMyPlaylist("My Baby");
addSongToMyPlaylist("Blacker than black");
console.log(myPlaylist);