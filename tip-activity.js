// Tip Calculator Activity

let billAmount = 400;
let tip = .2;

function calculateTip(billAmount, tip) {
    return billAmount * tip;
}
let tipAmount = calculateTip (billAmount, tip);
console.log( tipAmount.toFixed (2)); // $ 80.00 tip

function getBillTotal (billAmount, resultTip) {
    return billAmount +resultTip;
}
let billtotal = getBillTotal (billAmount, tipAmount);
console.log(billtotal.toFixed(2)); // total with tip is 480.00
