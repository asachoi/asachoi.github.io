var app = angular.module('app')

app.controller('addressCtrl',
  function($http, $scope) {
       var addressDB = {}

       $http.get('addressDB.json').
        then(function onSuccess(response) {
          addressDB = response.data
        }).
        catch(function onError(response) {
         console.log(response);
        });

        $scope.querySearch1 =function(query) {
          var results = query ? addressDB.provinces.filter( s => s.display.toLowerCase().indexOf(query.toLowerCase()) > -1 ) : addressDB.provinces
          return results;
        }
        $scope.querySearch2 =function(query, PROV_ID) {
          var _districts = addressDB.districts.filter(s => s.PROV_ID === PROV_ID)

          var results = query ? _districts.filter( s => s.display.toLowerCase().indexOf(query.toLowerCase()) > -1 ) : _districts
          return results;
        }
        $scope.querySearch3 =function(query, PROV_ID, DIST_ID) {
          var _wards = addressDB.wards.filter(s => s.PROV_ID === PROV_ID && s.DIST_ID === DIST_ID)
          var results = query ? _wards.filter( s => s.display.toLowerCase().indexOf(query.toLowerCase()) > -1 ) : _wards
          return results;
        }

  }
)




app.directive("address", function() {
  return {
    scope : {
      obj: '='
    },
    controller:  'addressCtrl',
    templateUrl: 'directives/address.html'
  }
})

