/**
 * Created by steven.Miles on 08/04/2016.
 */
(function () {
angular.module('iressSearchController', []).controller('SearchController',['$scope', 'SearchService', function ($scope, SearchService)
{
    var controller = this;

    controller.telephoneNumber = '';

    controller.searchResults = [];

    controller.search = function ()
    {
        SearchService.search(controller.telephoneNumber).then(function(data)
        {
            controller.searchResults = data;
        });
    }
}])
})();
