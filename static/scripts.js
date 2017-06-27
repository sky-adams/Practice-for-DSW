$(document).ready(function(){

   //function that executes when submit button for creating an account is clicked
   $("#create").click(function(){
      if ($("#pswd1").text() != $("#pswd2").text()){
        $("#error").text("Passwords do not match.")
      }
   });

});
