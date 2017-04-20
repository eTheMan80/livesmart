(function() {
angular.module('livesmart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/135',{
      templateUrl: 'route1.html',
      controller:'MainCtrl'
    }).
    when('/205',{
      templateUrl: 'route2.html',
      controller:'SecondaryCtrl'
    }).
    otherwise({redirectTo:'/135'});
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('http://transportapi.com/v3/uk/bus/route/LONDONBUS/135/outbound/490011448Z/2017-04-20/15:02/timetable.json?app_id=915f5f01&app_key=6c790cc8b20f0b394dedf8ba0ff8353c').then(function(response){
    $scope.services = response.data.stops;
    $scope.operator = response.data.operator;
    function initMap() {
      var london = [
                    {lat: 51.5254, lng: -0.08246},
                    {lat: 51.52593, lng: -0.08607},
                    {lat: 51.52645, lng: -0.08802},
                    {lat: 51.52803, lng: -0.08876}
      ],
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: {lat: 51.528, lng: -0.0938}
          }),
          marker,
          i;
          for (i = 0; i < london.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(london[i], london[i]),
              map: map
            });
          }
    }
    initMap();
  });
}])

.controller('SecondaryCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('http://transportapi.com/v3/uk/bus/route/LONDONBUS/205/inbound/490011448Z/2017-04-20/15:04/timetable.json?app_id=915f5f01&app_key=6c790cc8b20f0b394dedf8ba0ff8353c').then(function(response){
    $scope.services = response.data.stops;
    $scope.operator = response.data.operator;
    function initMap() {
      var london = [
                    {lat: 51.5254, lng: -0.08246},
                    {lat: 51.52593, lng: -0.08607},
                    {lat: 51.52645, lng: -0.08802},
                    {lat: 51.52779, lng: -0.09043}
      ],
          map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {lat: 51.528, lng: -0.0938}
          }),
          marker,
          i;
          for (i = 0; i < london.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(london[i], london[i]),
              map: map
            });
          }
        }
    initMap();
  });
}]);
})();
