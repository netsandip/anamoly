angular.module('BlurAdmin.pages')
    .controller('UsecaseFourPageCtrl', function ($scope, dataService) {

        getUseCaseFourData();

        function getUseCaseFourData() {
            $scope.useCaseFourdata = dataService.getUseCaseFourData();
        }

        $scope.visualization = d3plus.viz()
            .container("#viz")
            .data($scope.useCaseFourdata)
            .type("tree_map")
            .id("name")
            .size("value")
            .color({
                //"range": ["#FA58AC", "gray", "#819FF7"],
                "value": "value"
            })
            .legend({
                "value": "value",
                "icons": "false",
                "size" : "[100,100]",
                "labels": true,
                "align": "start"
                
            })
            .draw()

    });