let cookieAmount = 0;
let autoclickerAmount = 0;
let addToClickAmount = 0;
let autoclickerPrice = 100;
let addToClickPrice = 10;
let clickValue = 1;



document.querySelector('.addClickPrice').innerHTML = `${addToClickPrice} cookies`;

document.querySelector('.cookie-amount').innerHTML = cookieAmount;

document.querySelector('.addClickAmount').innerHTML = addToClickAmount;


document.querySelector('.autoclickerPrice').innerHTML = `${autoclickerPrice} cookies`;


document.querySelector('.autoclickerAmount').innerHTML = addToClickAmount;

function clickOnCookie() {

  

  cookieAmount = cookieAmount + clickValue;

  document.querySelector('.cookie-amount').innerHTML = cookieAmount;

}

function upgradeClickValue() {
  if (cookieAmount >= addToClickPrice) {
    cookieAmount = cookieAmount - addToClickPrice;
    clickValue++;
    addToClickAmount++;

    document.querySelector('.addClickAmount').innerHTML = addToClickAmount;

    addToClickPrice += 10;

    document.querySelector('.cookie-amount').innerHTML = cookieAmount;


    document.querySelector('.addClickPrice').innerHTML = `${addToClickPrice} cookies`;







  }
}
function upgradeAutoclickerValue() {
    console.log('in');
  if (cookieAmount >= autoclickerPrice) {
    cookieAmount = cookieAmount - autoclickerPrice;
    autoclickerAmount++;

    document.querySelector('.autoclickerAmount').innerHTML = addToClickAmount;

    autoclickerPrice = autoclickerPrice * 2;

    document.querySelector('.cookie-amount').innerHTML = cookieAmount;


    document.querySelector('.autoclickerPrice').innerHTML = `${autoclickerPrice} cookies`;







  }
}

function addAutoclick() {
  cookieAmount = cookieAmount + (autoclickerAmount * clickValue);
  console.log('adding');
}



setInterval(function addAutoclick() {
  cookieAmount = cookieAmount + (autoclickerAmount * clickValue);
  console.log('adding');
  document.querySelector('.cookie-amount').innerHTML = cookieAmount;

}, 1000);