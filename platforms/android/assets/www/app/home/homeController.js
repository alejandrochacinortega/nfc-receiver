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

    /*var tag = {};

    $ionicPlatform.ready(function() {
        $cordovaNfc.then(function(nfcInstance){
            nfcInstance.addNdefListener(function(event){
                console.log('Event: ', event);
                $rootScope.$apply(function() {
                    angular.copy(event.tag, tag);
                    console.log('despues $root: ', tag);
                    $scope.tag = tag;
                    vm.array = $scope.tag;
                    console.log('vm.array inside: ', vm.array);
                });
            })
                .then(
                function(event){
                    console.log("bound success");
                },
                function(err){
                    console.log("error");
                });
        });
    });*/




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