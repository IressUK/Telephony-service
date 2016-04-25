/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
    angular.module('iressAuthenticationService',[])
        .factory('AuthenticationService', ['$http', 'xplanApiUrl', 'xplanApiKey',
        function ($http, xplanApiUrl, xplanApiKey) {
            var isLoggedIn;

            function b64EncodeUnicode(str) {
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                    return String.fromCharCode('0x' + p1);
                }));
            }

            function login(userName, password) {
                var loginAuth = userName;
                if (this.isClientMode) {
                    loginAuth += '@client';
                }
                loginAuth += ":" + password;


                var req = {
                    method: 'GET',
                    url: xplanApiUrl + 'resourceful/session/user',
                    withCredentials:true,
                    headers: {
                        'X-XPLAN-auth-failure-action': 'error',
                        'Authorization': 'Basic ' + b64EncodeUnicode(loginAuth),
                        'x-xplan-app-id': xplanApiKey
                    }
                };

                return $http(req).then(function () {
                    isLoggedIn = true;
                }, function () {
                    isLoggedIn = false;
                });
            }

            return {
                isClientMode: false,

                setUser: function (aUser) {
                    user = aUser;
                },
                isLoggedIn: function () {
                    return isLoggedIn;
                },
                login: login
            };
        }])
})();