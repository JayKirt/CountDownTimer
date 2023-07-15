window.onload = function() {
    var countdownDate = new Date("2023-07-16T00:00:00").getTime();
  
    var countdown = setInterval(function() {
      var now = new Date().getTime();
      var distance = countdownDate - now;
  
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("timer").innerHTML = hours.toString().padStart(2, '0') + ":"
                                                    + minutes.toString().padStart(2, '0') + ":"
                                                    + seconds.toString().padStart(2, '0');
  
      if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  };