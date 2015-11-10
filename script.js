 var gameApp = angular.module('gameApp', []);
      gameApp.controller('gameController', function ($scope){
      $scope.winner="";
      $scope.launchCoinFlipper=function (){
                                $scope.showtossing();
                                setTimeout(function(){
                                        var isHead= Math.random()<.5;
                                        if(isHead){
                                                $scope.showHead();
                                        }
                                        else{
                                                $scope.showTail();
                                        }
                                        $scope.checkCompetitionResults();
                                },$scope.getRandomTime() * 1000);
      }
      $scope.showHead= function (){
                                $("#coin").removeClass("tossing");
                                $("#coin").removeClass("flipping");
                                $("#coin").removeClass("tail");
                                $("#coin").addClass("head");
                                $scope.showResults("H");
                        }
      $scope.showTail= function (){
                                $("#coin").removeClass("tossing");
                                $("#coin").removeClass("flipping");
                                $("#coin").removeClass("head");
                                $("#coin").addClass("tail");
                                $scope.showResults("T");
                        }
      $scope.showtossing= function (){
                                $("#coin").removeClass("flipping");
                                $("#coin").removeClass("tail");
                                $("#coin").removeClass("head");
                                $("#coin").addClass("tossing");
                        }
      $scope.showResults= function (msg){
                                if(!$scope.results==""){
                                        $scope.results=$scope.results +",";
                                }
                                 $scope.results=$scope.results +msg;
                                $scope.$apply();
                        }
      $scope.getRandomTime= function (){
                                return  Math.floor((Math.random() * 2) + 1); 
                        }
      $scope.startCompetition= function (){
                                setTimeout(function(){
                                
                                        if($scope.winner===""){
                                                $scope.launchCoinFlipper();
                                                $scope.startCompetition();
                                        }
                                },3000);
                        }
      $scope.checkCompetitionResults= function (){
                                var s = $scope.results;
                                if(s.indexOf($scope.myInput) > -1){
                                        $scope.winner="I Won";
                                }
                                else if(s.indexOf($scope.userInput) > -1){
                                        $scope.winner="You Won";
                                }
                                $scope.$apply();
                               
                         }
       $scope.mySelection= function (){
                                $scope.winner="";
                                $scope.results="";
                                var str_array = $scope.userInput.split(',');
                                var myString=not(str_array[1]);
                                myString=myString+","+str_array[0]+","+str_array[1];
                                $scope.myInput=myString;
                                
                        }
        not= function (state){
                                if(state=="H"){
                                        return "T";
                                }
                                if(state=="T"){
                                        return "H";
                                }
                        }
});
