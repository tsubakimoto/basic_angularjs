var mainCtrl = function($scope) {
	$scope.users = [
		{ "name":"matsumura", "score":52.22 }
		, { "name":"tanaka", "score":76.05 }
		, { "name":"yamada", "score":48.30 }
		, { "name":"satou", "score":3.14 }
		, { "name":"yamamoto", "score":12.43 }
		, { "name":"takahashi", "score":30.3 }
		, { "name":"itou", "score":39.45 }
		, { "name":"oda", "score":18.4 }
	];
	$scope.today = new Date();
}

var userItemCtrl = function($scope) {
	$scope.increment = function() {
		$scope.user.score++;
	}
}