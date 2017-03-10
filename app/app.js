var adminPanelApp = angular.module('adminPanelApp', []);

// adminPanelApp.config(function(){

// });

// adminPanelApp.run(function(){

// });

adminPanelApp.controller('AdminController', ['$scope', function($scope){

	$scope.users = [
		{
			firstName: "Adam",
			lastName: "Reszka",
			email: "adam.reszka85@gmail.com",
			login: "Noter",
			password: "adamantium",
			role: "Administrator",
			status: "Active"
		},
		{
			firstName: "Jan",
			lastName: "Kowalski",
			email: "jan.kowalski@gmail.com",
			login: "jkowalski",
			password: "jasio",
			role: "User",
			status: "Active"
		},
		{
			firstName: "Maria",
			lastName: "Nowak",
			email: "maria.nowak35@gmail.com",
			login: "mnowak",
			password: "Marysia",
			role: "Moderator",
			status: "Active"
		},
		{
			firstName: "Karol",
			lastName: "Kupa",
			email: "k.kura@gmail.com",
			login: "kkura",
			password: "karolek",
			role: "User",
			status: "Disabled"
		}
	];
}]);