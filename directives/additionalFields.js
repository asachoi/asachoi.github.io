var app = angular.module('app')


   app.directive("additionalFields", function() {
      return {
          scope: {
            obj: '='
          },
          templateUrl: 'directives/additionalFields.html'
      };
   });
