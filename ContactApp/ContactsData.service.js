
(function(){
    
    var app = angular.module("ContactApp");
    app.service("contactdataservice", function($http)
        {

            var info = this;

            info.getContacts = function() {
            // get posts form backend
      var promise =  $http.get('http://localhost:3000/contacts');
      var promise2 = promise.then(function(response) 
      {
         return response.data;
      });

      return promise2;
   
     
    }  

    info.saveUser = function(userData)
    {
        $http.put('http://localhost:3000/contacts/' + userData.id , userData)
         .then(function(response)
         { console.log(response); })
    }

});
      
  
    
    })();