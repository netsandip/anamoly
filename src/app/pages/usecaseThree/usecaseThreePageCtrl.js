(function () {
    'use strict';

    angular.module('BlurAdmin.pages')
        .controller('usecaseThreePageCtrl', usecaseThreePageCtrl);

    /** @ngInject */
    function usecaseThreePageCtrl($scope, $element, layoutPaths, baConfig, dataService) {

        getUseCaseThreeData();

        function getUseCaseThreeData() {
            $scope.useCaseThreedata = dataService.getUseCaseOneData();
        }

        var layoutColors = baConfig.colors;
        var id = $element[0].getAttribute('id');
        var pieChart = AmCharts.makeChart(id, {
            type: 'pie',
            startDuration: 0,
            theme: 'blur',
            addClassNames: true,
            color: layoutColors.defaultText,
            labelTickColor: layoutColors.borderDark,
            labelText: '[[title]]: [[value]]',
            legend: {
                position: 'right',
                marginRight: 100,
                autoMargins: false,
                // data: [{ title: "Door 1", color: "#01B7A9" },
                // { title: "Door 2", color: "#334245" },
                // { title: "Door 3", color: "#FD625E" },
                // { title: "Door 4", color: "#F2C70C" },
                // { title: "Door 5", color: "#5F6B6D" },
                // { title: "Door 6", color: "#95D8ED" },
                // { title: "Door 7", color: "#FE915F" },
                // { title: "Door 8", color: "#A66999" },
                // { title: "Door 9", color: "#3599B8" },
                // { title: "Door 10", color: "#DDBABA" }],
            },
            innerRadius: '40%',
            defs: {
                filter: [
                    {
                        id: 'shadow',
                        width: '200%',
                        height: '200%',
                        feOffset: {
                            result: 'offOut',
                            in: 'SourceAlpha',
                            dx: 0,
                            dy: 0
                        },
                        feGaussianBlur: {
                            result: 'blurOut',
                            in: 'offOut',
                            stdDeviation: 5
                        },
                        feBlend: {
                            in: 'SourceGraphic',
                            in2: 'blurOut',
                            mode: 'normal'
                        }
                    }
                ]
            },
            dataProvider: $scope.useCaseThreedata,
            valueField: 'NA_',
            titleField: 'Card_No',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-left',
            colorField: 'color',
            autoMargins: false,
            marginTop: 10,
            marginBottom: 10,
            alpha: 0.8,
            marginLeft: 0,
            marginRight: 0,
            pullOutRadius: 0,
            pathToImages: layoutPaths.images.amChart,
            responsive: {
                enabled: true,
                rules: [
                    // at 900px wide, we hide legend
                    {
                        maxWidth: 900,
                        overrides: {
                            legend: {
                                enabled: false
                            }
                        }
                    },

                    // at 200 px we hide value axis labels altogether
                    {
                        maxWidth: 200,
                        overrides: {
                            valueAxes: {
                                labelsEnabled: false
                            },
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10
                        }
                    }
                ]
            }
        });

        pieChart.addListener('init', handleInit);

        pieChart.addListener('rollOverSlice', function (e) {
            handleRollOver(e);
        });

        function handleInit() {
            pieChart.legend.addListener('rollOverItem', handleRollOver);
        }

        function handleRollOver(e) {
            var wedge = e.dataItem.wedge.node;
            wedge.parentNode.appendChild(wedge);
        }

        pieChart.addListener('clickSlice', function (e) {
            $scope.$parent.useCaseThreedata.length = 0;
            $scope.$parent.useCaseThreedata.push(e.dataItem.dataContext);
            $scope.$apply();
        });
    }

})();