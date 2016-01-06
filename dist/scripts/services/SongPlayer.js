 (function() {
     function SongPlayer($rootScope, Fixtures, Metric) {
          
          var SongPlayer = {};
          var currentAlbum = Fixtures.getAlbum();

          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;

          /**
          * @function setSong
          * @desc Stops currently playing song and loads new audio file as currentBuzzObject
          * @param {Object} song
          */

          var setSong = function(song) {
              if (currentBuzzObject) {
                  currentBuzzObject.stop();
                  SongPlayer.currentSong.playing = null;
              }
           
              currentBuzzObject = new buzz.sound(song.audioUrl, {
                  formats: ['mp3'],
                  preload: true,
                  volume: SongPlayer.volume
              });

              currentBuzzObject.bind('timeupdate', function() {
                  $rootScope.$apply(function() {
                      SongPlayer.currentTime = currentBuzzObject.getTime();
                  });
              });
           
              SongPlayer.currentSong = song;
          };

          var getSongIndex = function(song) {
              return currentAlbum.songs.indexOf(song);
          };

          /**
          * @desc Active song object from list of songs
          * @type {Object}
          */
          SongPlayer.currentSong = null;

          /**
          * @desc Current playback time (in seconds) of currently playing song
          * @type {Number}
          */
          SongPlayer.currentTime = null;


          /**
          * @function playSong
          * @desc Plays the currentBuzzObject audio file
          * @param {Object} song
          */ 
          var playSong = function (song) {
              currentBuzzObject.play();
              song.playing = true;
              Metric.registerSongPlay(song);
              Metric.countSongPlays(song);
          };

          var stopSong = function (song) {
              currentBuzzObject.stop();
              SongPlayer.currentSong.playing = null;
          };

          /**
          * @function play
          * @desc Play current or new song
          * @param {Object} song
          */

          SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;

            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);   
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
              } 

          };

          /**
          * @function pause
          * @desc Pause current song
          * @param {Object} song
          */

          SongPlayer.pause = function(song) {
              song = song || SongPlayer.currentSong;
              currentBuzzObject.pause();
              song.playing = false;
          };

          /**
          * @function previous
          * @desc sets and plays previous song
          * @param {Object} song
          */

          SongPlayer.previous = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex--;

              if (currentSongIndex < 0) {
                  stopSong(SongPlayer.currentSong);
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }

          };

          /**
          * @function next
          * @desc sets and plays next song
          * @param {Object} song
          */

          SongPlayer.next = function() {
              var currentSongIndex = getSongIndex(SongPlayer.currentSong);
              currentSongIndex++;

              if (currentSongIndex > currentAlbum.songs.length) {
                  stopSong(SongPlayer.currentSong);
              } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
              }
          };

          /**
          * @function setCurrentTime
          * @desc Set current time (in seconds) of currently playing song
          * @param {Number} time
          */
          SongPlayer.setCurrentTime = function(time) {
              if (currentBuzzObject) {
                  currentBuzzObject.setTime(time);
              }
          };

          SongPlayer.volume = 10;

          SongPlayer.setVolume = function(volume) {
            if (currentBuzzObject) {
              currentBuzzObject.setVolume(volume);
            }
          };

          return SongPlayer;
     }
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', 'Metric', SongPlayer]);
 })();