document.getElementById('button-add-cashout')
.addEventListener('click',function(event){
   event.preventDefault();
   const cashout=document.getElementById('input-cashout-money').value;
   const cashOutNumber=parseFloat(cashout)
   const phoneNumber=document.getElementById('phones-number-cashout').value;
   const pinNumber=document.getElementById('pins-number-cashout').value;
   if(phoneNumber==="123"&pinNumber==="123"){
    console.log('login sucess');
    const balance=document.getElementById('balance').innerText;
    const balanceNumber=parseFloat(balance);
    const reduceBalance=balanceNumber-cashOutNumber;
    document.getElementById('balance').innerText=reduceBalance;
   }else{
    alert('login failed')
   }
  
});