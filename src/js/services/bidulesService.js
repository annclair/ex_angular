((app) => {

  'use strict'
  app.service('bidulesService', function($http) {
      return {
        get() {
            return $http.get('/api/bidules')
        },
        add(bidule) {
            return $http.post('/api/bidules', bidule)
        },
        edit(bidule) {
            return $http.put('/api/bidules/' + bidule._id, bidule)
        },
        delete(bidule) {
            return $http.delete('/api/bidules/' + bidule._id)
        }
      }
  })

})(angular.module('app.services'))
