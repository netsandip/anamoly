(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseTwo', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseTwo', {
                url: '/usecaseTwo',
                templateUrl: 'app/pages/usecaseTwo/usecase-two.html',
                title: 'Use Case Two',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();