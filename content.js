if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // Alert message to be displayed
  function mobileAlert() {
    alert('This website is not compatible on mobile devices');
  }

  // Call the function every 1 second using setInterval()
  setInterval(mobileAlert, 1000);

  // Hide the element with class "mobile-hide"
  var element = document.querySelector('.mobile-hide');
  element.style.display = 'none';
} else {
  // code to run if user is on a desktop device
}
