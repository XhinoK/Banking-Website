 window.onload = build;
 
 var logArr = ["Test1@yahoo.com","Test2@gmail.com","Test3@yahoo.com","Test4@gmail.com",
 "Xhino@gmail.com","Xhino@yahoo.com","html@yahoo.com","javascript@gmail.com"];
 
 
 function build(){
	 var html = "<h1>Users Table</h1><table>";
	 for(var i=0;i<logArr.length;i++){
	 html+='<tr><td>' + logArr[i]+'</td><td></td><td></td></tr>';
	 }
	 document.getElementById('output').innerHTML = html;
 }
 
 function isEmail(email) {

            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            return regex.test(email);

        }
        $("#submitButton").click(function() {
			  var i;
			  var save = $("#email").val();
			  var fjalkalimi =$("#password").val();
			  
            var errorMessage = "";
            var fieldsMissing = "";

            if ($("#email").val() == "") {

                fieldsMissing += "<br>Email";

            }
            if (fjalkalimi = "") {

                fieldsMissing += "<br>Fjalkalimi i gabuar";

            }

            if (fieldsMissing != "") {

                errorMessage += "<p>Fusha(t) me poshte eshte/jane bosh:" + fieldsMissing;

            }

            if (isEmail($("#email").val()) == false) {

                errorMessage += "<p>Adresa juaj e Email-it nuk eshte e sakte</p>";

            }

            if (errorMessage != "") {

                $("#errorMessage").html(errorMessage);

            } 
			for(i=0;i<logArr.length;i++){
			if(save == logArr[i]){
                 window.alert('Mirseerdhet  '+save)
                $("#errorMessage").hide();
				break;
                  }else{
				  window.alert('Kjo adrese nuk ekziston ju lutem provoni adrese tjeter '); 
				  break;
				  }
            }
        });