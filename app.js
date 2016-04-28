angular.module('bomRadio', ["firebase"])
    .controller('bomController', ['$scope', '$http', function($scope, $http) {
        
        var bomCtrl = this;
        
        bomCtrl.name = '';
        $scope.type = '';
        
        $scope.bomStats = {
            pages: 532,
            chapters: 239,
            verses: 1000,
            
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
              $scope.info = $scope.name + " needs to read " + $scope.daysToCompletion + " " + type + " per day."
           } else {
               $scope.info = "";
           }
          
          $http.post("/", {info:$scope.info}).success(function(data, status){
              console.log(data);
              console.log(status);
          });
         
          $http.get('/', function(data, status){
              ref.once("value", function(data){
              var info = snapshot.val();
              res.send(info);
          })
           
   
//    $scope.sendInfo = function() {     
//     $http.post('/', {'info': $scope.info})
//         .then(function(res) {
//           console.log('info saved');
          
//         })
//     };
}
    // $scope.retrieveInfo = function() {
    //   $http.get('/').then(function(res) {
    //     console.log(res.data);
    //     $scope.info = res.data;
    //   });
    // };
    // $scope.retrieveinfo();

    }]);

