input.oninput = function () {
    cleaner()
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    cleaner();
    if (input.value === '') {
        empty();
        return false
    }
    if (telephoneCheck(input.value)) valid();
    else unvalid();
    h2.style.display = 'block';
    h2.style.top = "40px";
    h2.style.left = '50%';
    input.value = '';
})



function cleaner() {
    h2.style.display = 'none';
    imgSmile.style.filter = 'blur(10px)';
    imgSad.style.filter = 'blur(10px)';
    btn.textContent = 'CHECK'
    btn.style.background = '#c0c0c0'
}

function valid() {
    h2.textContent = 'valid';
    h2.style.marginLeft = '-64px';
    h2.style.transform = 'rotate(335deg)';
    h2.style.background = 'var(--dark-green)';
    imgSmile.style.filter = 'blur(0px)';
}


function unvalid() {
    h2.textContent = 'unvalid';
    h2.style.marginLeft = '-85px';
    h2.style.background = 'var(--red)';
    h2.style.transform = 'rotate(345deg)';
    imgSad.style.filter = 'blur(0px)';

}
function empty() {
    btn.textContent = 'ENTER NUMBER'
    btn.style.background = 'var(--red)'
}

