/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
    angular.module('iressTelephonyService').run(['$rootScope', '$location', 'AuthenticationService', function ($rootScope, $location, AuthenticationService) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if($location.path() !== '/login') {
                if (!AuthenticationService.isLoggedIn()) {
                    event.preventDefault();
                    $location.path('/login');
                }
            }
        });
    }]);
})();