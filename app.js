

var bomStats = {
    pages: 532,
    chapters: 239,
    verses: 1000
}



  angular.module('bomRadio', [])
    .controller('bomController', ['$scope', function($scope) {

      
      $scope.competion = function() {
          console.log($scope.type);
          
          if($scope.type == 'Chapters') {
              $scope.daysToCompletion = bomStats.chapters / $scope.days;
              console.log($scope.daysToCompleteion)
          }
          
          if($scope.type == 'Pages') {
              $scope.daysToCompletion = bomStats.pages / $scope.days;
              console.log($scope.daysToCompleteion)
          }
      }
      
    }]);
