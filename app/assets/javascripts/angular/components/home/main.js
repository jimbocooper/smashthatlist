//= require_self
//= require ./routes
//= require ./services
//= require ./controllers

(function() {
    angular.module('HomeApp', ['ui.bootstrap',
                               'ui.router',
                               'angular-spinkit',
                               'ngDialog']);
    angular
        .module('HomeApp')
        .config(["$locationProvider", function($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

    angular
        .module('HomeApp')
        .run(run)

    function run($rootScope, $state, $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            console.log("stateChangeStart");
            $rootScope.loading = true;
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            console.log("stateChangeSuccess");
            $rootScope.loading = false;
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log("StateChangeError");
            console.log(error);
            $rootScope.loading = false;
        });

    };

})();