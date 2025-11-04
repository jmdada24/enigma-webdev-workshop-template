 function loginForm(){

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const username = "robertotoy";


            if(email == "robertdoe@example.com" && password =="123"){
                //alert(email + ' ' + password);
                alert("Login Successfully")
                localStorage.setItem ("username", username);
                window.location.href = "html/dashboard.html"
            
            }else{
                alert('Invalid Credentials');

            }


        }
       