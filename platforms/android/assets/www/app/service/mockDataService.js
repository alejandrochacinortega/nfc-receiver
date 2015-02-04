angular
    .module('common.services', ['ngCordova.plugins.nfc'])
    .factory('MockDataService', ['$rootScope', '$ionicPlatform', '$cordovaNfc', '$cordovaNfcUtil', MockDataService]);


/* @ngInject */
function MockDataService($rootScope, $ionicPlatform, $cordovaNfc, $cordovaNfcUtil) {

    var receipts = [
        {
            receiptId: "1",
            store: 'ICA',
            amount: '20NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "2",
            store: 'Meny',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "3",
            store: 'Kiwi',
            amount: '200NOK',
            location: 'Oslo',
            tlf: '24 11 61 70'
        },

        {
            receiptId: "4",
            store: 'RIMI',
            amount: '210NOK',
            location: 'Oslo',
            tlf: '24 11 64 70'
        },

        {
            receiptId: "5",
            store: 'Kiwi',
            amount: '100NOK',
            location: 'Oslo',
            tlf: '21 11 61 70'
        }
    ];

    function getData() {
        return receipts;
    }

    function getReceipt(receiptId) {
        var receipt = _.find(receipts, { 'receiptId' : receiptId});
        return receipt;
    }

    function getSingleData() {
        var d = [
            {
                store: 'ICA',
                amount: '20NOK',
                location: 'Oslo',
                tlf: '24 11 61 70'
            }
        ];
        return d;
    }

    function shareMessage() {

        var tag = {};
        $ionicPlatform.ready(function() {
            $cordovaNfc.then(function(nfcInstance){
               /* var data = {
                    name: "Hue Settings",
                    kind: "mime",
                    type: 'text/hue',
                    record: '',
                    data: JSON.stringify({
                        "1":
                        {"state":
                        {"on":true,"bri":65,"hue":44591,"sat":254}
                        },
                        "2":
                        {"state":
                        {"on":true,"bri":254,"hue":13122,"sat":211}
                        },
                        "3":
                        {"state":
                        {"on":true,"bri":255,"hue":14922,"sat":144}
                        }
                    })
                } ;
*/

                //Use the plugins interface as you go, in a more "angular" way
                /*nfcInstance.addNdefListener(function(event){*/
                nfcInstance.addMimeTypeListener("text/json", function (nfcEvent) {
                    console.log('nfcEvent: ', nfcEvent);
                    console.log('nfcEvent.tag: ', nfcEvent.tag);
                    console.log('nfcEvent.tag.ndefMessage: ', nfcEvent.tag.ndefMessage);
                    /*var decodeMessage = ndef.decodeMessage(nfcEvent.tag.ndefMessage.payload)*/
                    if (nfcEvent.tag.ndefMessage.length > 1) {
                        console.log('Length is > 1');
                        console.log(nfcEvent.tag.ndefMessage[0].payload);
                        console.log(nfc.bytesToString(nfcEvent.tag.ndefMessage[1].payload));
                        /*console.log('byte  to string: ', nfc.bytesToString(nfcEvent.tag.ndefMessage.payload));*/
                    }


                });

                    //Callback when ndef got triggered
                    /*console.log('Event: ', event);
                    console.log('Record 1 : ', record);
                    console.log('Record Payload : ', record.payload);
                    console.log('Record Payload : ', ndef.bytesToHexString(record.payload));
                    console.log('Record Data: ', (record.data));*/


                    /*$rootScope.$apply(function() {
                        angular.copy(event.tag, tag);
                        console.log('despues $root: ', tag);
                        *//*console.log(JSON.stringify(nfcEvent.tag, null, 4))*//*
                    });*/
                })
                    .then(
                    function(event){
                        console.log("bound success");
                        console.log("Event: ", event);
                    },
                    function(err){
                        console.log("error");
                    });
            });
    //});
        /*return tag*/
    };

    ////////////////

    var service = {
        getData : getData,
        getSingleData: getSingleData,
        getReceipt: getReceipt,
        shareMessage: shareMessage
    };

    return service;





}