myApp.controller('getdataController',['$http','dataService','$location',function($http,dataService,$location) {

  
  var main = this;
  this.notes=[];
  console.log("in con");
  //function to get all notes
  this.getAllNotes=function()
  {

    dataService.getnotes()
    .then(function successCallback(response) {

          console.log(response);
          main.notes=response.data;
          console.log(main.notes + response.data);
        }, function errorCallback(response) {
          alert("some error occurred. Check the console.");
        }); 
  }
  //function to update title
  this.updateNotetitle=function(noteId,title)
  {
    var myData=
    {
      title:title
    }
    dataService.updatenote(noteId,title)
    .then(function successCallback(response) {
          alert("Title Updated Successfully");

        }, function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }
  // function to update body
  this.updateNotebody=function(noteId,body)
  {
    var myData=
    {
      body:body
    }
    dataService.updatenote(noteId,body)
    .then(function successCallback(response) {
          alert("body Updated Successfully");

        }, function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }
  //function to create new note
  this.createNewNote=function()
  {
    dataService.getnewnote()
    .then(function successCallback(response){
      alert("Created date is : " + response.data.created_date + ", " + "Created Note id is : " + response.data.id);
      $location.path('/');
    },function errorCallback(response)
    {
      alert("some error occures. Check the console.");
    });
  }
  //function to dlete a note
  this.deleteNote=function(noteId)
  {
    dataService.deleteANote(noteId)
    .then(function successCallback(response){
      alert("Deleted Successfully");
    },function errorCallback(response)
    {

      alert('some error occurs');
    })
  }
 }]); // end controller