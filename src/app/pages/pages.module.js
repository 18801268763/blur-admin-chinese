/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    'BlurAdmin.pages.tables',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: '页面',
      icon: 'ion-document',
      subMenu: [{
        title: '登录',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: '注册',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: '个人信息',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: '大纲级别 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: '大纲级别 1.1',
        disabled: true
      }, {
        title: '大纲级别 1.2',
        subMenu: [{
          title: '大纲级别 1.2.1',
          disabled: true
        }]
      }]
    });
  }

})();
