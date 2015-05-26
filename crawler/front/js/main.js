var app = angular.module('SpotOnIt', []);

app.controller('LayoutCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.crawl = function(url) {

        $http.get('https://salty-peak-4499.herokuapp.com/crawl?url=' + url).   // get HTML of URL to crawl
            success(function(data, status, headers, config) {
                
                var parsedData = $.parseHTML(data);  // create jQuery object from HTML          
                
                $scope.events = {};
                var monthRegex = "*:contains('January'):not(:has(*)), *:contains('Jan'):not(:has(*)), " +
                                 "*:contains('February'):not(:has(*)), *:contains('Feb'):not(:has(*)), " +
                                 "*:contains('March'):not(:has(*)), *:contains('Mar'):not(:has(*)), " +
                                 "*:contains('April'):not(:has(*)), *:contains('Apr'):not(:has(*)), " +
                                 "*:contains('May'):not(:has(*)), " +
                                 "*:contains('June'):not(:has(*)), *:contains('Jun'):not(:has(*)), " +
                                 "*:contains('July'):not(:has(*)), *:contains('Jul'):not(:has(*)), " +
                                 "*:contains('August'):not(:has(*)), *:contains('Aug'):not(:has(*)), " +
                                 "*:contains('September'):not(:has(*)), *:contains('Sep'):not(:has(*)), " +
                                 "*:contains('October'):not(:has(*)), *:contains('Oct'):not(:has(*)), " +
                                 "*:contains('November'):not(:has(*)), *:contains('Nov'):not(:has(*)), " +
                                 "*:contains('December'):not(:has(*)), *:contains('Dec'):not(:has(*))"; // find element with month in it
                
                $(parsedData).find(monthRegex).each(function(index, el) {
                
                    var event = {};
                    event.date = $(el).text();
                    event.location = "Somewhere";
                    
                    var parent = $(el).parent();
                    
                    while($(parent).find("h3").length == 0)
                        parent = $(parent).parent();
                        
                    event.title = $(parent).find("h3").text(); // go up     
                                                  
                    $scope.events[index] = event;                
                });     
                
                
            }).
            error(function(data, status, headers, config) {
                console.log("HTML fetch failed!");
            });
    }    
}]);