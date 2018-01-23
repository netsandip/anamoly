angular.module('BlurAdmin.pages')
    .controller('UsecaseOnePageCtrl', ['$scope', 'dataService',
        function ($scope, dataService) {
    
            getUseCaseOneData();

            function getUseCaseOneData() {
                $scope.useCaseOnedata = dataService.getUseCaseOneData();
                    // .then(function (response) {
                    //     $scope.customers = response.data;
                    // }, function (error) {
                    //     $scope.status = 'Unable to load UseCaseOneData data: ' + error.message;
                    // });
            }
        }]);

