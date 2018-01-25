angular.module('BlurAdmin.pages')
    .controller('UsecaseFivePageCtrl', function ($scope, dataService) {

        getUseCaseFiveData();

        function getUseCaseFiveData() {
            $scope.useCaseFourdata = dataService.getUseCaseFiveData();
        }

        google.charts.load('visualization', '1', { 'packages': ['treemap'] });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable($scope.useCaseFourdata);

            var options = {
                highlightOnMouseOver: true,
                maxDepth: 1,
                maxPostDepth: 2,
                minColor: '#009688',
                midColor: '#f7f7f7',
                maxColor: '#ee8100',
                headerHeight: 25,
                showScale: true,
                height: 700,
                fontColor: 'white',
                generateTooltip: showFullTooltip
            };

            function showFullTooltip(row, size, value) {
                return '<div style="background:white; padding:10px; border-style:none">' +
                    '<span><b>' + data.getColumnLabel(0) + ':</b> ' + data.getValue(row, 0) +
                    '<br><b>' + data.getColumnLabel(2) + ':</b> ' + size + '<br>'
            }

            tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

            tree.draw(data, options);

        }

    });