var app = angular.module('myApp', []);
app.controller('myCtrl', ['$scope', '$document', function ($scope, $document) {
        var canvas = $document.find('canvas')[0];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        $scope.currentPosX = 0;
        $scope.currentPosY = 0;
        $scope.previousPosX = 0;
        $scope.previousPosY = 0;

        $scope.drawFlag = false;

        $scope.canvasMouseDown = function ($event) {
            $scope.drawFlag = true;
            $scope.currentPosX = $event.clientX;
            $scope.currentPosY = $event.clientY;
        };

        $scope.canvasMouseUp = function ($event) {
            $scope.drawFlag = false;
        };

        $scope.canvasMouseMove = function ($event) {
            if (!$scope.drawFlag)
                return;
            var x = $event.clientX;
            var y = $event.clientY;
            var context = canvas.getContext('2d');
            context.strokeStyle = "rgba(255, 0, 0, 0)";
            context.globalAlpha = 0.0;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo($scope.currentPosX, $scope.currentPosY);
            context.lineTo(x, y);
            context.stroke();
            context.closePath();
            $scope.currentPosX = x;
            $scope.currentPosY = y;
        };
    }]);