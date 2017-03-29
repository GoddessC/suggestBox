var app = angular.module('SuggestionBox', ['ngRoute']);

// app.config( function($routeProvider){  
//   $routeProvider
// 	  .when("/index.html",{
// 	  	controller: "HomeController",
// 	  	templateUrl: "views/home.html"
// 	  })

// )};

app.config(function($routeProvider){  
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'media/views/home.html'
    })
});