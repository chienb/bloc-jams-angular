(function() {
    function MetricFunction($firebaseArray, Fixtures) {
        var firebaseRef = new Firebase("https://bloc-jams.firebaseio.com/");
        var songs = $firebaseArray(firebaseRef.child('Songs'));
        //$rootScope.songPlays = [];


        return {
            // Function that records a metric object by pushing it to the $rootScope/firebase array
            registerSongPlay: function(songObj) {
                // Add time to event register
                //songObj['playedAt'] = new Date();
                console.log(songObj);
                console.log(songs);   
                //$rootScope.songPlays.push(songObj);
                var songname=songObj.name;
                songs.$add({
                    name: songname,
                    sentAt: Firebase.ServerValue.TIMESTAMP

                });
            },
            countSongPlays: function(album) {
                angular.forEach
                // for each song in the album
                // filter out song name that matches song name
                $filter
                // count number of times in firebase
                .length
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
        .service('Metric', ['$firebaseArray', 'Fixtures', MetricFunction]);
})();