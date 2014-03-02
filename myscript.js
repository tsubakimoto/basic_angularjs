var mainCtrl = function($scope) {
    $scope.users = [
        {"name":"yuta", "score":52.22},
        {"name":"saori", "score":38.22},
        {"name":"tsubaki", "score":67},
    ];
    
    $scope.today = new Date();
}