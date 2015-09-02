var app = angular.module('myApp', []);

var model = {
		user:"Rafael"
};

function jsonp(url) {
	 var head = document.head;
	 var script = document.createElement("script");
	 script.setAttribute("src", url);
	 head.appendChild(script);
	 head.removeChild(script);
};

app.controller('Ctrl',['$scope', '$http', function($scope, $http) {
	 var url = "http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true&callback=JSON_CALLBACK&message=Hello"
     $http.jsonp(url)
    .success(function(data) {
        $scope.greeting = JSON.stringify(data.response.posts);
        $scope.greeting2 = JSON.parse($scope.greeting);
        console.log($scope.greeting2);
    });
	$scope.myModel = model;
}]);


$(document).ready(function(){
	$('body').css({'display':'none'});
    $('body').fadeIn(6000);
    setTimeout(function() {	
        $('body').click();
     }, 6000);
    setTimeout(function() {	
        $('body').click();
     }, 6001);
    setTimeout(function() {	
        $('body').click();
     }, 8001);
        
     $('html').on("click", function(){
        $('#container').pinto();  
     });
});