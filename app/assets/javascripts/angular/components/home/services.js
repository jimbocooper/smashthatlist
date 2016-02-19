(function() {
    'use strict';

    angular
    .module('HomeApp')
    .factory('ProjectsSrv', ProjectsSrv);

function ProjectsSrv($q, $http) {

    return {

        all: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url:    '/api/projects.json',
                    params: params
                })
                    .then(function successCallback(response) {
                        resolve(response.data);
                    }, function errorCallback(response) {
                        reject(response);
                    });
            });

        },

        update: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'PUT',
                    url:    '/api/projects.json',
                    data: {videos: params}
                })
                    .then(function successCallback(response) {
                        resolve(response.data);
                    }, function errorCallback(response) {
                        reject(response);
                    });
            });

        },

        create: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url:    '/api/projects.json',
                    data: {videos: params}
                })
                    .then(function successCallback(response) {
                        resolve(response.data);
                    }, function errorCallback(response) {
                        reject(response);
                    });
            });

        }

    }

};

    angular
        .module('HomeApp')
        .factory('TasksSrv', TasksSrv);

    function TasksSrv($q, $http) {

        return {

            update: function(params) {

                return $q(function(resolve, reject) {
                    $http({
                        method: 'PUT',
                        url:    '/api/tasks.json',
                        data: {videos: params}
                    })
                        .then(function successCallback(response) {
                            resolve(response.data);
                        }, function errorCallback(response) {
                            reject(response);
                        });
                });

            },

            create: function(params) {

                return $q(function(resolve, reject) {
                    $http({
                        method: 'POST',
                        url:    '/api/tasks.json',
                        data: {videos: params}
                    })
                        .then(function successCallback(response) {
                            resolve(response.data);
                        }, function errorCallback(response) {
                            reject(response);
                        });
                });

            }

        }

    };

})();