var BacoB = angular.module("BacoB", []);

BacoB.controller("Mostrar", function($Scope){
	$scope.mensaje="Karen"
	$Scope.operaciones= $Scope.first+$Scope.second;
	$Scope.first= 5;
	$Scope.second= 9;


});