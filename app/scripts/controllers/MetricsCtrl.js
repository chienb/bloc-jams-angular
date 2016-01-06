(function () {
	function MetricsCtrl($scope,$firebaseArray, Metric) {
		var firebaseRef = new Firebase("https://bloc-jams.firebaseio.com/");

		$scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){return d.label;},
                y: function(d){return d.value;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'Songs'
                },
                yAxis: {
                    axisLabel: 'Play Count',
                    axisLabelDistance: -10
                }
            }
        };
        var blue = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Blue"))
        var green = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Green"))
        var red = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Red"))
        var pink = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Pink"))
        var magenta = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Magenta"))

        // var firstSongLoad = function (song) {
        // 	song.$loaded().then(function(){
        // 	    return song.length;
        // 	});
        // }

        // firstSongLoad(blue);
        // console.log(blue);

        blue.$loaded().then(function() {
        	console.log(blue.length)
        })



        $scope.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "Blue" ,
                        "value" :  blue.length
                    } ,
                    {
                        "label" : "Green" ,
                        "value" : green.length
                    } ,
                    {
                        "label" : "Red" ,
                        "value" : red.length
                    } ,
                    {
                        "label" : "Pink" ,
                        "value" : pink.length
                    } ,
                    {
                        "label" : "Magenta" ,
                        "value" : magenta.length
                    }
                ]
            }
        ]
	}
	    

    angular
        .module('blocJams')
        .controller('MetricsCtrl', ['$scope','$firebaseArray','Metric', MetricsCtrl]);
})();