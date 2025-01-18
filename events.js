document.getElementById('button-login')
.addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);
    if(phoneNumber==='10'&pinNumber==='123'){
        console.log('loged IN')
        window.location.href='./home.html'
    }else{
        alert('you are failed')
    }
    
})