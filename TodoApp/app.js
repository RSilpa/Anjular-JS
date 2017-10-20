var app = angular.module("todoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl()
{
  this.editMode = false;
   this.myList = [
     "Try Angular Level 1",
     "Advanced Angular",
     "Try Angular Javabrains Website"
       ];
this.addtoList = function(){
  this.myList.push(this.newList);
  this.newList = "";

}

this.editList = function(){

this.editMode = !this.editMode;

}

this.deleteFromList  =  function(index){
  console.log(index);
 this.myList.splice(index, 1);
}

}
