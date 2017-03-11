var adminPanelApp = angular.module('adminPanelApp', ['ngRoute']);

// adminPanelApp.config(['$routeProvider', function($routeProvider){

// 	$routeProvider
// 		.when('/userslist', {
// 			templateUrl: 'userslist.html',
// 			controller: 'AdminController'
// 		})
// 		.when('/newuser', {
// 			templateUrl: 'newuser.html',
// 			controller: 'AdminController'
// 		})
// }]);

// adminPanelApp.run(function(){

// });

adminPanelApp.controller('AdminController', ['$scope', function($scope){

	$scope.removeUser = function(user){
		var removedUser = $scope.users.indexOf(user);
		$scope.users.splice(removedUser, 1);

	};
	$scope.addUser = function(newuser){
		console.log('działa');
		console.log($scope.newuser.firstName);
		$scope.users.push({
			number: "99",
			firstName: $scope.newuser.firstName,
			lastName: $scope.newuser.lastName,
			email: $scope.newuser.email,
			login: $scope.newuser.login,
			password: $scope.newuser.password,
			role: $scope.newuser.role,
			status: $scope.newuser.userStatus
		});

		$scope.newuser.firstName = "";
		$scope.newuser.lastName = "";
		$scope.newuser.email = "";
		$scope.newuser.login = "";
		$scope.newuser.password = "";
		$scope.newuser.role = "";
		$scope.newuser.userStatus = "";
	};

	$scope.users = [
		{
			number: "1",
			firstName: "Adam",
			lastName: "Reszka",
			email: "adam.reszka85@gmail.com",
			login: "Noter",
			password: "adamantium",
			role: "Administrator",
			status: "Active"
		},
		{
			number: "2",
			firstName: "Jan",
			lastName: "Kowalski",
			email: "jan.kowalski@gmail.com",
			login: "jkowalski",
			password: "jasio",
			role: "User",
			status: "Active"
		},
		{
			number: "3",
			firstName: "Maria",
			lastName: "Nowak",
			email: "maria.nowak35@gmail.com",
			login: "mnowak",
			password: "Marysia",
			role: "Moderator",
			status: "Active"
		},
		{
			number: "4",
			firstName: "Karol",
			lastName: "Kura",
			email: "k.kura@gmail.com",
			login: "kkura",
			password: "karolek",
			role: "User",
			status: "Disabled"
		}
	];
}]);