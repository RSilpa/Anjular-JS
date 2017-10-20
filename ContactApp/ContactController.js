
(function() {
    
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", ContactCtrl);
    
    
    function ContactCtrl(contactdataservice) {
    
        var self = this;
       
        contactdataservice.getContacts()
        .then(function(data){
            self.contacts = data;
        });
      
        this.selectContact =  function(index)
        {
            this.selectedContact = this.contacts[index];
        }

        this.saveUser =  function()
        {
            var userData = this.selectedContact;
            contactdataservice.saveUser(userData);  
        }

    }
    
    
 })();