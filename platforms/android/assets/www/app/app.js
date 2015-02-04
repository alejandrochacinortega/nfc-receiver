angular.module('App', ['ionic', 'common.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "view/menu.html"
      })

      .state('app.home', {
        url: "/home",
        views: {
          'menuContent': {
            templateUrl: "app/home/home.html",
            controller: 'HomeController as vm'
          }
        }
      })

      .state('app.receiptsList', {
        url: "/receiptsList",
        views: {
          'menuContent': {
            templateUrl: "app/receipts/receiptsList.html",
            controller: 'ReceiptsListController as vm'
          }
        }
      })

      .state('app.receiptSingle', {
        url: "/receiptsList/:receiptId",
        views: {
          'menuContent': {
            templateUrl: "app/receipts/receiptSingle.html",
            controller: 'ReceiptSingleController as vm'
          }
        }

      });

  $urlRouterProvider.otherwise('/app/home');
});
