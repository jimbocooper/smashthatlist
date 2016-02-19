(function() {
    'use strict';

    angular
    .module('ProjectsApp')
    .factory('ProjectsSrv', ProjectsSrv);

function ProjectsSrv($q, $http) {

    return {

        all: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url:    '/dashboard/my_videos.json',
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
                    url:    '/dashboard/my_videos/batch_update.json',
                    data: {videos: params}
                })
                    .then(function successCallback(response) {
                        resolve(response.data);
                    }, function errorCallback(response) {
                        reject(response);
                    });
            });

        },

        enable: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url:    '/dashboard/my_videos/'+params.id+'/enable.json/',
                    data: {id: params.id}
                })
                    .then(function successCallback(response) {
                        resolve(response.data);
                    }, function errorCallback(response) {
                        reject(response);
                    });
            });

        },

        disable: function(params) {

            return $q(function(resolve, reject) {
                $http({
                    method: 'GET',
                    url:    '/dashboard/my_videos/'+params.id+'/disable.json/',
                    data: {id: params.id}
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
                    url:    '/dashboard/my_videos.json',
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