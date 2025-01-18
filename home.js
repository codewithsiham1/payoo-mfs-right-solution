// s-1:add event handler prevent page reload after the submit
// s-2:get money to be  added to the  account balance
// s-3:get the Phone Number
// s-4:get the pin number
// s-5:verify the pin number
// s-6:get the current balance
// s-7:ad addMoneyInput with balnce
// s-8:update the balance in the ui/dom
// add money to the account

document.getElementById('button-add-money')
.addEventListener('click',function(event){
   event.preventDefault();
   const addMoney=document.getElementById('input-add-money').value;
   const newMoneyNumber=parseFloat(addMoney);
   const phoneNumber=document.getElementById('phones-number').value;
   const pinNumber=document.getElementById('pins-number').value;
    if(pinNumber==='123'&phoneNumber==='017'){
        console.log('login succesed')
        const balance=document.getElementById('balance').innerText;
        const newbalance=parseFloat(balance);
        const updateBalance=newbalance +newMoneyNumber;
        document.getElementById('balance').innerText=updateBalance
    }else{
        alert('login failed')
    }
});
















// step-1: add an event eventhandler to the add money buton inside the form
// document.getElementById('button-add-money')
// .addEventListener('click',function(event){
//     // prevent page reload after the submit
//     event.preventDefault();
//     // step-2:get money to be  added to the  account balance
//     const addMoneyInput=document.getElementById('input-add-money').value;
//     // sterp-3:get the phone number
//     const addPhoneNumber=document.getElementById('phones-number').value;
// //    step-4:get the phone number
// const addPinNumber=document.getElementById('pins-number').value;
//     console.log(addMoneyInput,addPhoneNumber,addPinNumber);
//     // step-5: verify the pin number
//     // wrong way tho validate pin number
//     if(addPinNumber==='1234'){
//         console.log('adding money suceesfully')
//         // step-6:get the current balance
//              const balance=document.getElementById('balance').innerText;
//              console.log(balance)
//             //  step-7: ad addMoneyInput with balance
//             const addMoneyNumber=parseFloat(addMoneyInput);
//             const balanceNumber=parseFloat(balance);
//             const newBalance=addMoneyNumber + balanceNumber;
//             console.log(newBalance)
//             // step-6:update the balance in the ui/dom
//             document.getElementById('balance').innerText=newBalance;
//     }else{
//         alert('failed to added money')
//     }

// });