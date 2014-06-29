var testApp = angular.module('testApp', [ 'ngRoute', 'LocalStorageModule' ]);

testApp.config(function ($routeProvider) {
    $routeProvider
        .when('/root', { controller: 'TestController', templateUrl: 'app/partials/root.partial.html' })
        .when('/test1', { controller: 'TestController', templateUrl: 'app/partials/test1.partial.html' })
        .when('/test2', { controller: 'TestController', templateUrl: 'app/partials/test2.partial.html' })
        .otherwise({ redirectTo: '/root' });
});