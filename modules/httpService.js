/**
 * Created by Tuber on 2017/6/13.
 */
(function (angular) {
    var app = angular.module('movieApp.httpService', []);
    app.service('httpService' ,function () {
        this.getJsonp = function (url, callback) {
            var name = 'jsonp' + Math.random().toString().substring(2);
            window[name] = function (data) {
                callback(data);
                document.head.removeChild(script);
            }
            var script = document.createElement('script');
            script.src=url+'?'+'apikey=00fa6c0654689a0202ef4412fd39ce06&callback='+name;
            document.head.appendChild(script);
        }
    });
})(angular)
