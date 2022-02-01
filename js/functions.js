// const rePop = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/;
// const reFil = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
const reSimple = /^(1 |1|)(\d{3}|\(\d{3}\))( ||-)(\d{3})( ||-)(\d{4}$)/;


function telephoneCheck(str) {
    return reSimple.test(str);
}

const form = document.querySelector('form'),
    input = document.querySelector('input'),
    h2 = document.querySelector('h2'),
    imgSmile = document.querySelector('img:nth-child(1)'),
    imgSad = document.querySelector('img:nth-child(2)'),
    btn = document.querySelector('button');


