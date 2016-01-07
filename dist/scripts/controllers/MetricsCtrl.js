(function () {
	function MetricsCtrl($scope,$firebaseArray,$q, Metric) {
		var firebaseRef = new Firebase("https://bloc-jams.firebaseio.com/");
		
        var track1 = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Intro (feat. Tunji Ige)"))
        var track2 = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Gemini (feat. George Maple)"))
        var track3 = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Arrows (feat. Dawn Golden)"))
        var track4 = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Death Drive (feat. KLP)"))
        var track5 = $firebaseArray(firebaseRef.child('Songs').orderByChild('name').equalTo("Oddity"))

        $q.all([ track1.$loaded(), 
                 track2.$loaded(), 
                 track3.$loaded(), 
                 track4.$loaded(), 
                 track5.$loaded()
        ]).then(makeChart)


        function makeChart(data) {
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
            $scope.data = [
                {
                    values: [
                        {
                            "label" : "Intro (feat. Tunji Ige)" ,
                            "value" : track1.length
                        } ,
                        {
                            "label" : "Gemini (feat. George Maple)" ,
                            "value" : track2.length
                        } ,
                        {
                            "label" : "Arrows (feat. Dawn Golden)" ,
                            "value" : track3.length
                        } ,
                        {
                            "label" : "Death Drive (feat. KLP)" ,
                            "value" : track4.length
                        } ,
                        {
                            "label" : "Oddity" ,
                            "value" : track5.length
                        }
                    ]
                }
            ]
        }

	}
	    

    angular
        .module('blocJams')
        .controller('MetricsCtrl', ['$scope','$firebaseArray','$q','Metric', MetricsCtrl]);
})();