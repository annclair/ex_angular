((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $locationProvider.hashPrefix('!')
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        // .state('app.bidule', {
        //     url: '/',
        //     template: '<bidule></bidule>'
        // })

    }])
})(angular.module('app.config'))
