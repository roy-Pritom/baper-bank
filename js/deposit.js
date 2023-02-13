document.getElementById('deposit-btn').addEventListener('click',function(){
    const newDepositAmount=getInputValueById('deposit-amount');
    const previousDeposit=getTextValueById('deposit');
    if(isNaN(newDepositAmount))
    {
        alert("Enter a proper amount");
        return ;
    }
    if(newDepositAmount<=0)
    {
        alert("Enter a proper amount");
        return ;
    }
    const currentDepositTotal=newDepositAmount+previousDeposit;
    setElementById('deposit',currentDepositTotal);
   
    // main balance 
    const previousBalance=getTextValueById('balance');
    const totalBalance=previousBalance+newDepositAmount;
    setElementById('balance',totalBalance);


})