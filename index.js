var config = {
    apiKey: "AIzaSyASuCYUFuxnP4F88F6ijGKACbQ92plpd7g",
    authDomain: "signupdata-5b73f.firebaseapp.com",
    databaseURL: "https://signupdata-5b73f.firebaseio.com",
    projectId: "signupdata-5b73f",
    storageBucket: "signupdata-5b73f.appspot.com",
    messagingSenderId: "608136731595"
  };
  firebase.initializeApp(config);

  var name="";
  var email="";
  var age=0;
  var comment="";

  $("#addUser").on("click",function(){
  	name=$("#nameInput").val().trim();
	email=$("#emailInput").val().trim();
	age=$("#ageInput").val().trim();
	comment=$("#commentInput").val().trim();

	firebase.database().ref().set({
		Name:name,
		Email:email,
		Age:age,
		Comment:comment
	})
				
  })

  firebase.database().ref().on("value",function(snapshot){
  	$("#nameDisplay").html(snapshot.val().Name);
	$("#emailDisplay").html(snapshot.val().Email);
	$("#ageDisplay").html(snapshot.val().Age);
	$("#commentDisplay").html(snapshot.val().Comment);
  })
