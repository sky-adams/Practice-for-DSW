$(document).ready(function(){

   //function that executes when submit button for creating an account is clicked
   $("#create").submit(function(){
      if ($("#pswd1").val() != $("#pswd2").val()){
        $("#error").text("Passwords do not match.")
        return false;
      }
      else
         return true;
   });

});
