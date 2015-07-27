'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskNewCtrl
 * @description
 * # TaskNewCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksNewCtrl', function ($scope, $http) {

	$scope.submitPost = function () {
    console.log("TasksNewCtrl submitPost");
          var data = {
              'email' : $scope.signup.email,
              'password' : $scope.signup.password,
              'full_name' : $scope.signup.full_name
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/tasks/new',
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("TaskNewCtrl submitPost req email:"+req.data.data.email);
console.log("TaskNewCtrl submitPost req full_name:"+req.data.data.full_name);
console.log("TaskNewCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.signup.email = data.email; 
                $scope.signup.full_name = data.full_name; 
                $scope.signup.password = data.password; 
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});