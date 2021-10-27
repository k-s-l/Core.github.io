function validation()
         {
              var user = document.getElementById('name').value;
              var mobile = document.getElementById('MobileNumber').value;
              var emailID = document.getElementById('email').value;


              if(user =="")
              {
                 document.getElementById('name').innerHTML ="*Please fill the username field*";
                 return false;
              }

              if((user.length <=2) || (user.length > 20))
                      {
                         document.getElementById('name').innerHTML ="*Username length must be between 2 to 20*";
                          return false;
                      }
                   if(!isNaN(user))
                     {
                        document.getElementById('name').innerHTML ="*Only Characters are allowed*";
                        return false;
                     }

                     if(mobile =="")
                    {
                       document.getElementById('mobileno').innerHTML ="*Please fill the Mobile Number field*";
                  return false;

                   }
                   if(isNaN(mobile))
                   {
                      document.getElementById('mobileno').innerHTML ="*User must write digits only no charaters*";
                  return false;
                   }
                   if(mobile.length!=10)
                    {
                       document.getElementById('mobileno').innerHTML ="*User should write only 10 digits*";
                  return false;
                   }

                   if(emailID =="")
                   {
                      document.getElementById('emailids').innerHTML ="*Please fill the Email ID field*";
                 return false;
                  }
                  if(email.indexOf('@')<= 0)
                  {                
                     document.getElementById('emailids').innerHTML ="*@ at invalid position*";
                 return false;
                  }
                  if((email.charAt(emails.length-4)!='.')&&  (emails.charAt(emails.length-3)!='.'))
                  {
                      document.getElementById('emailids').innerHTML ="* '.' at invalid position *";
                 return false;
                  }
            }

            function show_alert()
            {
            alert("Your Information is saved sucessfully!");
            return false;
             }