$(document).ready(function(){

   //function that executes when submit button for creating an account is clicked
   //can be a void function, but returning false prevents the action set in the html form tag from executing
   $("#createaccount").submit(function(){
      if ($("#pswd1").val() != $("#pswd2").val()){
        $("#error").text("Passwords do not match.")
        return false;
      }
      else
         return true;
   });

});
