(function () {
    'use strict';

    angular.module('BlurAdmin.pages.usecaseSix', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usecaseSix', {
                url: '/usecaseSix',
                templateUrl: 'app/pages/usecaseSix/usecase-six.html',
                title: 'Use Case Six',
                sidebarMeta: {
                    icon: 'ion-stats-bars',
                    order: 800,
                },
            });
    }

})();