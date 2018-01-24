angular.module('BlurAdmin.pages')
    .controller('UsecaseFourPageCtrl', function ($scope, dataService) {

        getUseCaseFourData();

        function getUseCaseFourData() {
            $scope.useCaseFourdata = dataService.getUseCaseFourData();
        }
        
    });