/**
 * Created by Tuber on 2017/6/13.
 */
(function (angular) {
    var app = angular.module('movieApp.controller', []);
    app.controller('movieListCtrl', function ($scope, $routeParams, $location, httpService) {
        //$scope.test = '测试';
        var url = 'https://api.douban.com/v2/movie/' + $routeParams.type;
        $scope.maxPage = 0;
        $scope.page = parseInt($routeParams.page || 1);
        $scope.movieList = {title: '正在加载中。。。'};
        $scope.upPage = function () {
            if($scope.page > 1) {
                $scope.page--;
                $location.path('/movie/'+$routeParams.type + '/' + $scope.page);
            }
        }
        $scope.downPage = function () {
            if($scope.page < $scope.maxPage) {
                $scope.page++;
                $location.path('/movie/'+$routeParams.type + '/' + $scope.page);
            }
        }
        httpService.getJsonp(url, function (data) {
            $scope.maxPage = Math.ceil( data.total / 3 );
            $scope.movieList = data;
            $scope.$apply();
        }, {start: ($scope.page - 1) * 3, count: 3 , q: $routeParams.q});
    });
    app.controller('movieDetialCtrl', function ($scope, $routeParams,httpService) {
        //$scope.test = '测试';
        $scope.movieDetial = null;
        var url = 'https://api.douban.com/v2/movie/subject/' + $routeParams.id;
        httpService.getJsonp(url, function (data) {
            $scope.movieDetial = data;
            // console.log($scope.movieDetial);
            $scope.$apply();
        })
    });
    app.controller('movieSearch', function ($scope, $location) {
        $scope.movieText = '';
        $scope.search = function () {
            if($scope.movieText) {
                $location.path('/movie/search').search("q", $scope.movieText);
            }
        }
    });
})(angular);
