if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    function myFunction() {
  // Code to be executed
  alert('This website is not compatible on mobile devices')
}

// Call the function every 5 seconds using setInterval()
setInterval(myFunction, 5000);
    var element = document.querySelector('.mobile-hide');
    element.style.display = 'none';
} else {
    // code to run if user is on a desktop device
}
