angular.module('bomRadio', ["firebase"])
    .controller('bomController', ['$scope', '$http', function($scope, $http) {
        
        
        
        $scope.bomStats = {
            pages: 532,
            chapters: 239,
            name: '',
            
        
        };

      
      $scope.competion = function(type, days) {
          console.log(type);
          console.log($scope.daysToCompletion);
          
          if(type === 'Chapters') {
              $scope.daysToCompletion = $scope.bomStats.chapters / days;
              console.log($scope.daysToCompletion);
          }
          
          if(type === 'Pages') {
              $scope.daysToCompletion = $scope.bomStats.pages / days;
              console.log($scope.daysToCompletion);
          }
          
          if($scope.daysToCompletion) {
              $scope.info =" You need to read " + $scope.daysToCompletion + " " + type + " per day."
           } else {
               $scope.info = "";
           }
          
          $http.post("/", {info:$scope.info}).success(function(data, status){
              console.log(data);
              console.log(status);
          });
         
          $http.get('/', function(data, status){
             
          });
           
}
 
    }]);

