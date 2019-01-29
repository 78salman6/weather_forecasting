(function () {
    angular.module("app.data")
        .factory("weatherSvc", function ($http, $q) {
            return {
                find: findByLocation
            }

            function findByLocation(location) {
                var url = "http://api.openweathermap.org/data/2.5/find?q=" + location;

                var defer = $q.defer();

                $http.get(url)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }
        });
}());