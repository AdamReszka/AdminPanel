var adminPanelApp = angular.module('adminPanelApp', ['ngRoute']);

adminPanelApp.config(['$routeProvider','$locationProvider' function($routeProvider, $locationProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'AdminController as adcon'
		})
		.when('/newuser', {
			templateUrl: 'views/newuser.html',
			controller: 'AdminController as adcon'
		})
		.when('/userslist', {
			templateUrl: 'views/userslist.html',
			controller: 'AdminController as adcon'
		}).otherwise({
			redirectTo: '/home'
		});
}]);

// adminPanelApp.run(function(){

// });

adminPanelApp.controller('AdminController', [function(){

	var self = this;
	self.removeUser = function(user){
		var removedUser = self.users.indexOf(user);
		self.users.splice(removedUser, 1);

	};
	self.addUser = function(newuser){
		console.log('działa');
		console.log(self.users);
		self.users.push(
		{
			number: "99",
			firstName: self.newuser.firstName,
			lastName: self.newuser.lastName,
			email: self.newuser.email,
			login: self.newuser.login,
			password: self.newuser.password,
			role: self.newuser.role,
			userStatus: self.newuser.userStatus
			
		});
		console.log(self.users);
		// zamienić powyższe na konkretne wartości
		// zamiast $scope.newuser.firstName dodaj jakieś imie

		self.newuser.firstName = "";
		self.newuser.lastName = "";
		self.newuser.email = "";
		self.newuser.login = "";
		self.newuser.password = "";
		self.newuser.role = "";
		self.newuser.userStatus = "";
	};

	self.users = [
		{
			number: "1",
			firstName: "Adam",
			lastName: "Reszka",
			email: "adam.reszka85@gmail.com",
			login: "Noter",
			password: "adamantium",
			role: "Administrator",
			userStatus: "Active"
		},
		{
			number: "2",
			firstName: "Tomasz",
			lastName: "Kowalski",
			email: "jan.kowalski@gmail.com",
			login: "jkowalski",
			password: "jasio",
			role: "User",
			userStatus: "Active"
		},
		{
			number: "3",
			firstName: "Maria",
			lastName: "Nowak",
			email: "maria.nowak35@gmail.com",
			login: "mnowak",
			password: "Marysia",
			role: "Moderator",
			userStatus: "Active"
		},
		{
			number: "4",
			firstName: "Karol",
			lastName: "Kura",
			email: "k.kura@gmail.com",
			login: "kkura",
			password: "karolek",
			role: "User",
			userStatus: "Disabled"
		}
	];


}]);