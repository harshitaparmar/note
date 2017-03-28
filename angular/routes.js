
myApp.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider){
     $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    $routeProvider
        .when('/',{
            templateUrl     : 'views/main-view.html',
            controller      : 'getdataController',
            controllerAs    : 'getdata'
        })
        .when('/addnewnote',{
            templateUrl     : 'views/add-new.html',
            controller      : 'getdataController',
            controllerAs    : 'getdata'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : 'views/add-new.html'
            }
        );
}]);