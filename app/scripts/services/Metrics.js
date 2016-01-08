(function() {
    function MetricFunction($firebaseArray,Fixtures) {
        var firebaseRef = new Firebase("https://bloc-jams.firebaseio.com/");
        var songs = $firebaseArray(firebaseRef.child('Songs'));
        var album = Fixtures.getAlbum();

        return {
            registerSongPlay: function(songObj) {

                var songname=songObj.name;
                songs.$add({
                    name: songname,
                    sentAt: Firebase.ServerValue.TIMESTAMP
                });
            },
            countSongPlays: function(songObj) {
                var FilteredSong = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo(songObj.name));
                FilteredSong.$loaded();
            }
        }
    }

    angular
        .module('blocJams')
        .service('Metric', ['$firebaseArray','Fixtures', MetricFunction]);
})();