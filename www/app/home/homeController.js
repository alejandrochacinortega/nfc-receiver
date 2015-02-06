angular
    .module('App')
    .controller('HomeController', ['$scope', '$ionicPlatform','$rootScope', 'MockDataService', '$state', '$timeout', '$cordovaNfc', HomeController]);

/* @ngInject */
function HomeController($scope, $ionicPlatform, $rootScope, MockDataService, $state, $timeout, $cordovaNfc) {
    var vm = this;

    vm.activate = activate;
    vm.title = 'HomeController';
    vm.info = true;
    vm.listAccess = listAccess;
    activate();
    vm.array = '';

    vm.data = MockDataService.getData();
    vm.single = MockDataService.getSingleData();

    $scope.tag = MockDataService.shareMessage();
    vm.array = $scope.tag;



    ////////////////

    function activate() {
    }

    function listAccess() {
        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $state.go('app.receiptsList');
    }

    console.log('single: ', vm.single);
    console.log('single: ', vm.data);




}