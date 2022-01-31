// const rePop = /^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/;
// const reFil = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
const reSimple = /^(1 |1|)(\d{3}|\(\d{3}\))( ||-)(\d{3})( ||-)(\d{4}$)/;


function telephoneCheck(str) {
    return reSimple.test(str);
}


