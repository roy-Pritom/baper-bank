function getInputById(id)
{
   const inputField= document.getElementById(id);
   const inputValue=inputField.value;
   inputField.value='';
   return inputValue;
}
document.getElementById("submit-btn").addEventListener('click',function(){
   const email=getInputById('user-email');

   const password=getInputById('user-password');
   if(email=='pritom@gmail.com' && password=='secret1')
   {
      window.location.href="bank.html";
   }
   else{
    alert("Invalid user id and password");
   }


})