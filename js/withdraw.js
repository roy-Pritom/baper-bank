document.getElementById('withdraw-btn').addEventListener('click',function(){
        const newWithdrawAmount=getInputValueById('withdraw-amount');
        const previousWithdrawAmount=getTextValueById("withdraw");
        const previousTotalAmount=getTextValueById('balance');

        if(newWithdrawAmount>previousTotalAmount)
        {
            alert("Insufficient Balance");
            return ;
        }
        if(isNaN(newWithdrawAmount))
        {
            alert("Enter a proper amount");
            return ;
        }
        if(newWithdrawAmount<=0)
        {
            alert("Enter a proper amount");
            return ;
        }
        const currentWithdrawTotal=newWithdrawAmount+previousWithdrawAmount;
        setElementById('withdraw',currentWithdrawTotal);

        // // main balance
        // // const previousTotalAmount=getTextValueById('balance');
        const currentTotalAmount=previousTotalAmount-newWithdrawAmount;
        setElementById('balance',currentTotalAmount);

})