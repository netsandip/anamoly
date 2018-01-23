(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseFour', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseFour', {
                url: '/usecaseFour',
                templateUrl: 'app/pages/usecaseFour/usecase-four.html',
                title: 'Use Case Four',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();