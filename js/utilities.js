
function getInputValueById(id)
{
   const inputField= document.getElementById(id);
   const inputValueString=inputField.value;
      const inputValue=parseFloat(inputValueString);
   inputField.value='';
   return inputValue;
}
function getTextValueById(id)
{
   const textElement= document.getElementById(id);
    const textElementString=textElement.innerText;
   const textElementValue=parseFloat(textElementString);

   return textElementValue;

}
function setElementById(id,newValue)
{
    const Text= document.getElementById(id);
   Text.innerText=newValue;
   
}