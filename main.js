(function () {
  let preventScroll = false;
  let scrollTimeout = null;

  function scrollTo(top) {
    preventScroll = true;
    window.scroll({top, behavior: 'smooth'});

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      preventScroll = false;
    }, 350);
  }

  function scrollToTop() {
    scrollTo(0);
  }

  function scrollToBottom() {
    scrollTo(document.body.scrollHeight);
  }


  function scrollDetect() {
    let lastScroll = 0;

    window.onscroll = function () {
      if (preventScroll) {
        return;
      }

      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        scrollToBottom();
      } else {
        lastScroll = currentScroll;
        scrollToTop();
      }
    };
  }

  document.getElementById('alas-button').addEventListener('click', function () {
    scrollToBottom();
  });

  scrollDetect();
})();
