/**
 * Created by Tuber on 2017/6/13.
 */
(function (angular) {
    var app = angular.module('movieApp.controller', []);
    app.controller('movieListCtrl', function ($scope, $routeParams, httpService) {
        //$scope.test = '测试';
        $scope.movieList = null;
        var url = 'https://api.douban.com/v2/movie/' + $routeParams.type;
        httpService.getJsonp(url, function (data) {
            $scope.movieList = data;
            console.log($scope.movieList);
            $scope.$apply();
        })
    })
})(angular);
