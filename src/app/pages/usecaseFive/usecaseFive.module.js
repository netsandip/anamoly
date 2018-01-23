(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseFive', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseFive', {
                url: '/usecaseFive',
                templateUrl: 'app/pages/usecaseFive/usecase-five.html',
                title: 'Use Case Five',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();