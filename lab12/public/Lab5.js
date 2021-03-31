const pwd = document.getElementById('contra');
const vali = document.getElementById('val');
const form = document.getElementById('form');

form.addEventListener('submit', (e) =>{
    if(pwd.value === vali.value){
        alert('Verification complete');
    }else{
        alert('Wrong password');
        e.preventDefault();
    }
})