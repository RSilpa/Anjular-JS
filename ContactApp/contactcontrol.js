
(function() {

var app = angular.module("ContactApp");
app.controller("ContactCtrl", ContactCtrl);


function ContactCtrl(contactdataservice) {

    this.contacts = contactdataservice.contacts;
  
    this.selectContact =  function(index)
    {
        this.selectedContact = this.contacts[index];
    }
    
}
} 

)();