function animateNumber(callback, from, to, duration) {
  let start = null,
    animate = timestamp => {
      start = start || timestamp;
      let progress = Math.min((timestamp - start) / duration, 1);
      callback(progress * (to - from) + from);
      if(progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };
  window.requestAnimationFrame(animate);
}

function websiteVisits(response) {
    animateNumber(value => {
        document.querySelector("#visits").textContent = Math.floor(value);
      }, 0, response.value, 2000);
}
 