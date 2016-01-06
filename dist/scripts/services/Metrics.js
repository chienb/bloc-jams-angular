(function() {
    function MetricFunction($firebaseArray,Fixtures) {
        var firebaseRef = new Firebase("https://bloc-jams.firebaseio.com/");
        var songs = $firebaseArray(firebaseRef.child('Songs'));
        var album = Fixtures.getAlbum();

        //$rootScope.songPlays = [];


        return {
            // Function that records a metric object by pushing it to the $rootScope/firebase array
            registerSongPlay: function(songObj) {
                // Add time to event register
                //songObj['playedAt'] = new Date(); 
                //$rootScope.songPlays.push(songObj);
                var songname=songObj.name;
                songs.$add({
                    name: songname,
                    sentAt: Firebase.ServerValue.TIMESTAMP

                });
            },
            countSongPlays: function(songObj) {
                var FilteredSong = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo(songObj.name));
                FilteredSong.$loaded().then(function(){
                    console.log(FilteredSong.length);
                });


                //$scope.notes.$loaded().then(function(notes) {
                //    console.log(notes.length); // data is loaded here
                //});

                //angular.forEach(album.songs, function (){


                    //return FilteredSong.length;


                    // songs.orderByChild('name').equal('blue').on('child_added',function(snapshot) {
                    //     console.log(snapshot.key());
                    //.length
                //})
                // for each song in the album
                // filter out song name that matches song name
                // count number of times in firebase
                
            }


            // listSongsPlayed: function() {
            //     var songs = [];
            //     angular.forEach($rootScope.songPlays, function(song) {
            //         songs.push(song.name);
            //     });

            //     return songs;
            // }
            //}
        };

    }

    angular
        .module('blocJams')
        .service('Metric', ['$firebaseArray','Fixtures', MetricFunction]);
})();