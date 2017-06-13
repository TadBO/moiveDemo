/**
 * Created by Tuber on 2017/6/13.
 */
(function (angular) {
    var app = angular.module('movieApp.route', []);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/movie/:type/:page?', {
                //template: '<h1>{{ test }}</h1>',
                templateUrl: './template/movieListTemplate.html',
                controller: 'movieListCtrl'
            })
    })
})(angular)
