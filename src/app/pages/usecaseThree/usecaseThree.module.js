(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseThree', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseThree', {
                url: '/usecaseThree',
                templateUrl: 'app/pages/usecaseThree/usecase-three.html',
                title: 'Use Case Three',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();