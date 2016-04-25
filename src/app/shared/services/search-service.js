/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
    angular.module('iressSearchService',[])
        .factory('SearchService', ['$http','xplanApiUrl',
            function ($http, xplanApiUrl) {


                function search(telephoneNumber) {


                    var req2 = {
                        method: 'POST',
                        url: xplanApiUrl + 'resourceful',
                        withCredentials: true,
                        data: {
                            "batch": [{
                                "url": "/resourceful/entity/client-v3",
                                "method": "GET",
                                "body": {
                                    "include_client_status": ["8"],
                                    "quicksearch": "tel:" + telephoneNumber,
                                    "page_sort": "+entity_name",
                                    "page_bookmark": "",
                                    "page_dir": ""
                                },
                                "name": "similar-clients_clients",
                                "omit_results_on_success": false
                            }, {
                                "url": "/resourceful/entity/client-v3",
                                "method": "GET",
                                "body": {
                                    "ids": "{result=similar-clients_clients:$[*].id}",
                                    "include_client_status": ["8"],
                                    "page_sort": "+entity_name",
                                    "fields": ["first_name", "last_name", "dob", "preferred_phone", "preferred_email", "preferred_street", "preferred_suburb", "preferred_state", "preferred_postcode", "create_date"]
                                },
                                "omit_results_on_success": false
                            }]
                        },
                        headers: {
                            'X-XPLAN-auth-failure-action': 'error'
                        }


                    };


                    return $http(req2).then(function (request) {
                        return JSON.parse(request.data[1].body);
                    }, function () {
                        return request.data
                    });
                }

                return {
                    search: search
                };
            }])
})();