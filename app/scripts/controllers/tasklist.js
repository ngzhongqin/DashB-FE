'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskListCtrl
 * @description
 * # TaskListCtrl
 * Controller of the pssdashApp
 */

app.controller('TaskListCtrl', function ($scope, $http) {

  //   $scope.tasks = [
  //     {'no': '1',
  //      'description': 'Setup log server',
  //      'defect': 'PIB-123',
  //      'incident': 'INC000000123412',
  //      'status': 'WIP',
  //      'datedue': '01/08/2015',
  //      'owner': 'Zhong Qin',
  //      'remarks': 'Confirmed better'},

  //     {'no': '2',
  //      'description': 'Setup log server',
  //      'defect': 'PIB-123',
  //      'incident': 'INC000000123412',
  //      'status': 'WIP',
  //      'datedue': '01/08/2015',
  //      'owner': 'Zhong Qin',
  //      'remarks': 'Confirmed better'},

  //     {'no': '3',
  //      'description': 'Setup log server',
  //      'defect': 'PIB-123',
  //      'incident': 'INC000000123412',
  //      'status': 'WIP',
  //      'datedue': '01/08/2015',
  //      'owner': 'Zhong Qin',
  //      'remarks': 'Confirmed better'},

  //     {'no': '4',
  //      'description': 'Setup log server',
  //      'defect': 'PIB-123',
  //      'incident': 'INC000000123412',
  //      'status': 'WIP',
  //      'datedue': '01/08/2015',
  //      'owner': 'Zhong Qin',
  //      'remarks': 'Confirmed better'},

  // ];

          var data = {
              'field1' : $scope.tasks,
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/tasks',
           headers: {
             'Content-Type': "application/json"
           },
           data:{data: data}
          }

            $http(req).success(function (data, status, headers, config) {
                $scope.tasks = data.data; 
                console.log("data.data"+ data.data);
                console.log("$scope.tasks: "+ $scope.task);
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

});