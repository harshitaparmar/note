myApp.factory('dataService',function($http){

	var dataAPIS  =  {};
	var baseUrl = 'https://i22.in/memo/api';
	dataAPIS.getnotes=function(){
		return $http.get(baseUrl +'/notes');
	}
	dataAPIS.getnewnote=function(){
		return $http.get(baseUrl +'/note/new');
	}
	dataAPIS.updatenote=function(id,data){
		return $http.post(baseUrl +'/note/update'+id,data);
	}
	dataAPIS.deleteANote=function(noteId){
		return $http.delete(baseUrl +'/note/delete' + noteId);
	}
	return dataAPIS;

});//end of service 