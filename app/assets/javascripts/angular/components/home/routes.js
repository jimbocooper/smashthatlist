(function() {
    'use strict';

    angular
        .module('HomeApp')
        .config(routes);

    function routes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                abstract: true,
                url: '',
                templateUrl: 'home.html',
                resolve: {
                    projects: function(ProjectsSrv) {
                        return ProjectsSrv.all();
                    }
                },
                controller: 'ProjectListCtrl'
            })
            .state('home.projects', {
                url: '',
                templateUrl: 'projects.list.html'
            })
        ;

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("home.projects");
        });

    };

})();
