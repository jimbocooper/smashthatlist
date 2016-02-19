//= require_self

(function() {
    /*
    'use strict';

    var myapp = angular
        .module('ProjectsApp', ['ui.bootstrap',
                                'angular-spinkit',
                                'ng-dialog']);

    myapp
        .controller('ProjectsAppListController',ProjectsAppListController);

    function ProjectsAppListController($scope){
        $scope.test.title = 'TEST (Beta)';
    }
    */
    var app = angular.module('ProjectsApp', ['ui.bootstrap',
                                            'angular-spinkit',
                                            'ngDialog']);

    app.controller('ProjectListCtrl', ProjectListCtrl);

    function ProjectListCtrl($scope){
        $scope.greeting = { text: 'Hello' };
        $scope.test = { title: 'TEST (Beta)'};
    };

})();