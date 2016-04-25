/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
angular.module('iressLogin', []).controller('LoginController',['$location', '$scope','AuthenticationService', function ($location, $scope, AuthenticationService)
{
    var controller = this;

    controller.userName = '';
    controller.password = '';

    controller.login = function () {
        AuthenticationService.login(controller.userName, controller.password)
            .then(function () {
                    $location.path('/');
                }, function () {
                    // error
                }
            );
    }
}])
})();