 (function() {
     function Fixtures() {
         var Fixtures = {};

         // Example Album
         var albumGemini = {
             name: 'Gemini EP',
             artist: 'What So Not',
             label: 'Sweat It Out!/OWSLA',
             year: '2015',
             albumArtUrl: 'http://a1.mzstatic.com/us/r30/Music7/v4/31/ab/64/31ab6444-4b65-7417-509f-f41b8930031a/cover170x170.jpeg',
             songs: [
                { name: 'Intro (feat. Tunji Ige)', length: 59, audioUrl: '/assets/music/01 Intro (feat. Tunji)' },
                { name: 'Gemini (feat. George Maple)', length: 270, audioUrl: '/assets/music/02 Gemini (feat. George Maple)' },
                { name: 'Arrows (feat. Dawn Golden)', length: 266, audioUrl: '/assets/music/03 Arrows (feat. Dawn Golden)' },
                { name: 'Death Drive (feat. KLP)', length: 272, audioUrl: '/assets/music/04 Death Drive (feat. KLP)' },
                { name: 'Oddity', length: 251, audioUrl: '/assets/music/05 Oddity' }
             ]
         };

         Fixtures.getAlbum = function() {
             return albumGemini;
         };

         Fixtures.getCollection = function (numberOfAlbums) {
         	var albums = [];
         	for (var i = 0; i < numberOfAlbums; i++) {
         	    albums.push(angular.copy(albumGemini));
         	}
         	return albums;
         };

         return Fixtures;
     }
 
     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();