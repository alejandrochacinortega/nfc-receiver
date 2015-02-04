angular
    .module('App')
    .controller('ReceiptSingleController', ['$stateParams', 'MockDataService', ReceiptSingleController]);

/* @ngInject */
function ReceiptSingleController($stateParams, MockDataService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;

    var receiptId = ($stateParams.receiptId);
    vm.receipt = MockDataService.getReceipt(receiptId);
    console.log(vm.receipt);


    activate();

    ////////////////

    function activate() {
    }
}