((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.bidule', {
            url:'/',
            template:'<bidule></bidule>'
        })
    }])
})(require('angular').module('app.bidule', []))
