(function () {
	var app = angular.module('blocjams', ['ui.router']);
	var musicApp = angular.module('musicApp', []);

	// --- Albums ---//
	var albumPicasso = {
	  albuminfo: {name: 'The Colors', artist: 'Pablo Picasso', label: 'Cubism', year: '1881', albumArtUrl: 'assets/images/album_covers/01.png'},
      songs: [
        { name: 'Blue', length: 268, audioUrl: 'assets/music/1' },
        { name: 'Green', length: 217.99, audioUrl: 'assets/music/2' },
        { name: 'Red', length: 252, audioUrl: 'assets/music/3' },
        { name: 'Pink', length: 240, audioUrl: 'assets/music/4' },
        { name: 'Magenta', length: 270.99, audioUrl: 'assets/music/5' }
    ]
	};

	var albumEllie = {
	  albuminfo: {name: 'Lights', artist: 'Ellie Goulding', label: 'Polydor', year: 2010, albumArtUrl: '/images/lights.jpg'},
	  songs: [
	    { name: "Guns and Horses", length: '3:35' },
	    { name: "Starry Eyed", length: '2:56' },
	    { name: "This Love (Will Be Your Downfall)", length: '3:53' },
	    { name: "Under the Sheets", length: '3:44' },
	    { name: "The Writer", length: '4:11' },
	    { name: "Every Time You Go", length: '3:25' },
	    { name: "Wish I Stayed", length: '3:40' },
	    { name: "Your Biggest Mistake", length: '3:25' },
	    { name: "I'll Hold My Breath", length: '3:45' },
	    { name: "Salt Skin", length: '4:17' }
	  ]
	};

	// --- End Album -- //

	app.config(function($stateProvider, $locationProvider) {
		$locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });

		$stateProvider.state('album', {
		    url: '/album',
		    controller: 'AlbumController',
		    templateUrl: '/templates/album.html'
		});

		$stateProvider.state('collection', {
		    url: '/collection',
		    controller: 'CollectionController',
		    templateUrl: '/templates/collection.html'
		});

		$stateProvider.state('landing', {
		    url: '/landing',
		    controller: 'LandingController',
		    templateUrl: 'templates/landing.html'
		});

		});

	app.controller('LandingController', ['$scope', function($scope) {
		$scope.tagline = 'Turn the music up!!';

	}]);

	app.controller('CollectionController', ['$scope', function($scope) {
		$scope.albums = [];
		for (i=0; i<10; i++) {
			$scope.albums.push(angular.copy(albumPicasso));
		}

	}]);

	app.controller('AlbumController', ['$scope', function($scope) {
		$scope.album = angular.copy(albumPicasso);
	}]);

	// ---Services--- //
	musicApp.service('SongPlayer', function() {
	    return {
	        pause: function() {	
	            this.playing = false;
	            currentSoundFile.pause();
	        }
	        //check if a song playing
	        //identify currently playing song
	        //identify current album
	        //play a song
	        //Track the time position of a playing song
			//Go to the previous track (What if the user is on the first track?)
			//Go to the next track (What if the user is on the last track?)
			//Adjust the volume
	    }
	});

})();