if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // code to run if user is on a mobile device
    var element = document.querySelector('.mobile-hide');
    element.style.display = 'none';
} else {
    // code to run if user is on a desktop device
}
