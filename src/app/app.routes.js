/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
    angular.module('iressTelephonyService').config(['$routeProvider','$httpProvider',
        function ($routeProvider, $httpProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/components/search/search.tpl.html',
                controllerAs: 'ctrl',
                controller: 'SearchController'
            }).when('/login', {
                templateUrl: 'app/components/login/login.tpl.html',
                controllerAs: 'ctrl',
                controller: 'LoginController'
            }).when('/create-client', {
                templateUrl: 'app/components/create-client/create-client.tpl.html',
                controllerAs: 'ctrl',
                //controller: 'PhoneDetailCtrl'
            }).when('/create-lead/:clientID', {
                templateUrl: 'app/components/create-lead/create-lead.tpl.html',
                controllerAs: 'ctrl',
                //controller: 'PhoneDetailCtrl'
            }).otherwise({
                redirectTo: '/'
            });

            $httpProvider.defaults.withCredentials = true;

        }])
})();