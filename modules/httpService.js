/**
 * Created by Tuber on 2017/6/13.
 */
(function (angular) {
    var app = angular.module('movieApp.httpService', []);
    app.service(function () {
        this.getJsonp = function (url, callback) {
            var name = 'jsonp' + Math.random().toString().substring(2);
            window[name] = function (data) {
                callback(data);
                document.head.removeChild(script);
            }
            var script = document.createElement('script');
            script.src = url + 'callback=' + name;
            document.head.appendChild(script);
        }
    });
})(angular)
