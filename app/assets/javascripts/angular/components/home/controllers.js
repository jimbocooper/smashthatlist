(function() {
    'use strict';

    angular.module('HomeApp').controller('ProjectListCtrl', ProjectListCtrl);

    function ProjectListCtrl($scope, $state, projects) {
        $scope.projects = projects;
    };

})();