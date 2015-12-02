(function () {
	var app = angular.module('blocjams', ['ui.router']);
	
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
		$scope.albumPicasso = {
		    albuminfo: [
		    	{name: 'The Colors', artist: 'Pablo Picasso', label: 'Cubism', year: '1881', albumArtUrl: 'assets/images/album_covers/01.png'}
		    ],
		    songs: [
		       { name: 'Blue', length: 268, audioUrl: 'assets/music/1' },
		       { name: 'Green', length: 217.99, audioUrl: 'assets/music/2' },
		       { name: 'Red', length: 252, audioUrl: 'assets/music/3' },
		       { name: 'Pink', length: 240, audioUrl: 'assets/music/4' },
		       { name: 'Magenta', length: 270.99, audioUrl: 'assets/music/5' }
		    ]
		};		
	}]);

	app.controller('AlbumController', ['$scope', function($scope) {
		$scope.albumPicasso = {
		    albuminfo: [
		    	{name: 'The Colors', artist: 'Pablo Picasso', label: 'Cubism', year: '1881', albumArtUrl: 'assets/images/album_covers/01.png'}
		    ],
		    songs: [
		       { name: 'Blue', length: 268, audioUrl: 'assets/music/1' },
		       { name: 'Green', length: 217.99, audioUrl: 'assets/music/2' },
		       { name: 'Red', length: 252, audioUrl: 'assets/music/3' },
		       { name: 'Pink', length: 240, audioUrl: 'assets/music/4' },
		       { name: 'Magenta', length: 270.99, audioUrl: 'assets/music/5' }
		    ]
		};		
	}]);


})();