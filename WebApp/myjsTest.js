 var logArr = ["a@yahoo.com","b@gmail.com","c@yahoo.com","d@gmail.com"]
     document.getElementById("lista").innerHTML = logArr;
	 
	 

 
            function isEmail(email) {

                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

                return regex.test(email);

            }
            $("#SButton").click(function() {
                var errorMessage = "";
                var fieldsMissing = "";
				var email = $("#email").val();
				var password = $("#password").val();
 

                if ($("#emri").val() == "") {

                    fieldsMissing += "<br>Emri";

                }
				if ($("#mbiemri").val() == "") {

                    fieldsMissing += "<br>Mbiemri";

                }

                if ($("#email").val() == "") {

                    fieldsMissing += "<br>Email";

                }
                if ($("#EmailConfirm").val() == "") {

                    fieldsMissing += "<br>Konfirmo Emailin";

                }

                if ($("#password").val() == "") {

                    fieldsMissing += "<br>Fjalkalimi";

                }

                if ($("#passwordConfirm").val() == "") {

                    fieldsMissing += "<br>Konfirmo Fjalkalimin";

                }

                if (fieldsMissing != "") {

                    errorMessage += "<p>Fusha(t) me poshte eshte/jane bosh:" + fieldsMissing;

                }

                if (isEmail($("#email").val()) == false) {

                    errorMessage += "<p>Adresa juaj e Email-it nuk eshte e sakte</p>";

                }

                if ($("#email").val() != $("#EmailConfirm").val()) {

                    errorMessage += "<p>Emaili juaj nuk perputhet</p>";

                }

                if ($("#password").val() != $("#passwordConfirm").val()) {

                    errorMessage += "<p>Fjalkalimi juaj nuk perputhet</p>";

                }

                if (errorMessage != "") {

                    $("#errorMessage").html(errorMessage);

                } else {
					  var table = document.getElementById("table");
                      var row = table.insertRow(0);
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      cell1.innerHTML = email;
                     cell2.innerHTML = password;
					 logArr.push(email);
					 document.getElementById("lista").innerHTML = logArr ;
                     window.alert('Ju u regjistruat me sukses')

                    $("#errorMessage").hide();

                }

            });


        
 
 
 
 
 
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
				  window.alert('error'); 
				  break;
				  }
            }
        });