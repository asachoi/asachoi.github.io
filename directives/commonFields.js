var app = angular.module('app')


   app.directive("commonFields", function() {
      return {
          scope: {
            obj: '='
          },
          templateUrl: 'directives/commonFields.html'
      };
   });
