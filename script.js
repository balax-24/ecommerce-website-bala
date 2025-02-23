const bar=document.getElementsById('bar');
const close=document.getElementsById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}