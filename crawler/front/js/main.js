var app = angular.module('SpotOnIt', []);

app.controller('LayoutCtrl', function($scope, $http){
    
    $http.get('https://demo-project-edibly.c9.io/crawl').
        success(function(data, status, headers, config) {
            cont = data;
        }).
        error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });    
	
	$scope.events = [
	{title: "This is a random event", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "This could also possibly be an event", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Montreal Canadiens stanley cup parade", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "San Jose Sharks relocating to New Mexico", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Joe Thornton's first game in a habs Jersey", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "This is a random event", start: "4:20" , date: "Apr 21", end: "5:00", location: "Location"},
	{title: "This could also possibly be an event", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Montreal Canadiens stanley cup parade", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "San Jose Sharks relocating to New Mexico", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Joe Thornton's first game in a habs Jersey", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "This is a random event", start: "4:20" , date: "Apr 21", end: "5:00", location: "Location"},
	{title: "This could also possibly be an event", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Montreal Canadiens stanley cup parade", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "San Jose Sharks relocating to New Mexico", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Joe Thornton's first game in a habs Jersey", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "This is a random event", start: "4:20" , date: "Apr 21", end: "5:00", location: "Location"},
	{title: "This could also possibly be an event", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Montreal Canadiens stanley cup parade", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "San Jose Sharks relocating to New Mexico", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	{title: "Joe Thornton's first game in a habs Jersey", date: "Apr 21", start: "4:20" , end: "5:00", location: "Location"},
	];

})