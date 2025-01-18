// show the cashout section
document.getElementById('btn-show-cashout')
.addEventListener('click',function(){
    // show cashout button clicked
     console.log('show cashout');
     document.getElementById('cashout-form').classList.remove('hidden');
    //  hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
}); 
// show add money form hide the cashout form
document.getElementById('btn-show-addmoney')
.addEventListener('click',function(){
document.getElementById('add-money-form').classList.remove('hidden');
document.getElementById('cashout-form').classList.add('hidden');
});