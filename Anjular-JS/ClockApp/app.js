var module = angular.module("clockApp", []);
module.controller("TimeCtrl", TimeCtrl);

function TimeCtrl() {
    var currentDate = new Date();
    this.userName = "";
    this.timeString = currentDate.toTimeString();
    this.updateTime = function () {
        var currentDate = new Date();
       this.timeString =  currentDate.toTimeString();
       
    }



}