/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.usecaseOne',
    'BlurAdmin.pages.usecaseTwo',
    'BlurAdmin.pages.usecaseThree',
    'BlurAdmin.pages.usecaseFour',
    'BlurAdmin.pages.usecaseFive',
    'BlurAdmin.pages.usecaseSix',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    // 'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Pages',
    //   icon: 'ion-document',
    //   subMenu: [{
    //     title: 'Sign In',
    //     fixedHref: 'auth.html',
    //     blank: true
    //   }, {
    //     title: 'Sign Up',
    //     fixedHref: 'reg.html',
    //     blank: true
    //   }, {
    //     title: 'User Profile',
    //     stateRef: 'profile'
    //   }, {
    //     title: '404 Page',
    //     fixedHref: '404.html',
    //     blank: true
    //   }]
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Use Case 2',
    //   icon: 'ion-stats-bars',
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Use Case 3',
    //   icon: 'ion-stats-bars',
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Use Case 4',
    //   icon: 'ion-stats-bars',
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Use Case 5',
    //   icon: 'ion-stats-bars',
    // });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Use Case 6',
    //   icon: 'ion-stats-bars',
    // });
  }

})();
