
function getMusicTitlesByYear(music_tracks){
   const music_by_year = {};

   if(!Array.isArray(music_tracks)){
        throw new Error('The input object is invalid -- must be an array of track objects');
   }

   for(const track of music_tracks){
        if(typeof track.artist!='string' || typeof track.year!='number' || typeof track.title!='string'){
            throw new Error('Track is invalid');
        }

        
        if(!music_by_year[track.year]){
            music_by_year[track.year]= [];
        }
        music_by_year[track.year].push(track.title);
   }

   for(const year in music_by_year){
        music_by_year[year].sort();
   }

   return music_by_year;
}

// const tracks = [
//     { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
//     { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
//     { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
// ];

// console.log(getMusicTitlesByYear(tracks));
