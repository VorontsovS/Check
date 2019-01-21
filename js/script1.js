const el=document.querySelector ('div');
const elchek=document.querySelector ('input');
console.log (el.classList);
el.addEventListener ('mouseenter', (ev) => {
    if (elchek.checked) {
    el.classList.add ("bgcolor");
    }
});
el.addEventListener ('mouseleave', (ev) => {
    el.classList.remove ("bgcolor");
});