(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseOne', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseOne', {
                url: '/usecaseOne',
                templateUrl: 'app/pages/usecaseOne/usecase-one.html',
                title: 'Use Case One',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();