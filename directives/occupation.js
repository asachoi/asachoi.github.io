var app = angular.module('app')

app.controller('occupationCtrl',
 function($scope, $http) {
                   var states   = {}

                   $http.get('occupationDB.json').
                    then(function onSuccess(response) {
                      states = response.data
                    }).
                    catch(function onError(response) {
                     console.log(response);
                    });

                    $scope.querySearch =function(query) {
                      var results = query ? states.filter( s => s.display.toLowerCase().indexOf(query.toLowerCase()) > -1 ) : states
                      return results;
                    }
                }
)




app.directive("occupation", function() {
  return {
    scope : {
      obj: '='
    },
    controller:  'occupationCtrl',
    templateUrl: 'directives/occupation.html'
  }
})

