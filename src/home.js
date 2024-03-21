export function home() {
  // ---------------- Premium section ---------------------//
  let slideHolder = document.querySelector(".options-holder"),
    slideItem = slideHolder.querySelectorAll(".opt"),
    buttons = document.querySelectorAll(".rental-options .arrow"),
    itemWidth = slideItem[0].clientWidth,
    slideCounter = 0;

  function prev() {
    if (slideCounter == 0) return;
    slideCounter--;
    slideHolder.style.transition = `0.5s  ease-in-out transform`;
    slideHolder.style.transform = `translateX(${-itemWidth * slideCounter}px)`;
  }

  function next() {
    if (slideCounter == slideItem.length - 3) return;
    slideCounter++;
    slideHolder.style.transition = `0.5s  ease-in-out transform`;
    slideHolder.style.transform = `translateX(${-itemWidth * slideCounter}px)`;
  }
  buttons[0].onclick = next;
  buttons[1].onclick = prev;

  // ---------------- What people say section ---------------------//

  let slider = document.querySelector(".reviews-container .slider"),
    psSlideItem = slider.querySelectorAll(".review"),
    psSlideItemWidth = psSlideItem[0].clientWidth,
    pscounter = 1;

  //------------------ cloning
  let firstClone = psSlideItem[0].cloneNode(true),
    lastClone = psSlideItem[1].cloneNode(true);

  firstClone.classList.add("firstClone");
  lastClone.classList.add("lastClone");

  slider.append(firstClone);
  slider.prepend(lastClone);

  psSlideItem = slider.querySelectorAll(".review");
  // ----------------------

  slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;

  function slides() {
    if (pscounter === psSlideItem.length - 1) return;
    slider.style.transition = "0.7s ease-in-out";
    pscounter++;
    slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
  }

  slider.addEventListener("transitionend", () => {
    if (psSlideItem[pscounter].classList.contains("firstClone")) {
      slider.style.transition = "none";
      pscounter = 1;
      slider.style.transform = `translateX(${-psSlideItemWidth * pscounter}px)`;
    }
  });

  setInterval(slides, 5000);

  window.addEventListener("resize", () => {
    // eslint-disable-next-line no-unused-expressions
    (psSlideItemWidth = psSlideItem[0].clientWidth), (pscounter = 0);
  });

  // ---------------- scrolling Event ---------------------//

  // bars icon
  let barsIcon = document.querySelector(".bars-icon");
  let links = document.querySelector(".links");

  barsIcon.onclick = function () {
    links.classList.toggle("active");
  };

  // -------------------- scrollTop
  let goUp = document.querySelector(".scroll-top");

  function scrollTop() {
    if (window.scrollY >= 1000) {
      goUp.classList.add("scrolling");
    } else goUp.classList.remove("scrolling");
    goUp.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // -------------------- services Done
  let counter = document.querySelectorAll(".counter");
  let deal = document.querySelector(".deal");

  window.onscroll = function () {
    // -------------------- Countdown
    let offsetHeight = deal.offsetTop;
    let servicesHeight = deal.clientHeight;
    let windowHeight = this.innerHeight;
    let scrolledPixs = window.scrollY;
    if (scrolledPixs > offsetHeight + servicesHeight - windowHeight) {
      counter.forEach((count) => {
        function CountUpdate() {
          let speed = 200;
          let addition = Number(count.dataset.target / speed);
          let target = Number(count.dataset.target);
          let initial = +count.textContent;
          if (initial < target) {
            count.textContent = Math.ceil(initial + addition);
            setTimeout(CountUpdate, 60);
          }
        }
        CountUpdate();
      });
    }
    // -------------------- scrollTop
    scrollTop();
    // -------------------- scrolldown
    navScrolling();
  };
  let scrollItems = document.querySelectorAll(".scroll-event");
  let logo = document.querySelector(".logo");

  function navScrolling() {
    if (window.scrollY >= 100) {
      scrollItems.forEach((i) => {
        i.classList.add("scrolling");
      });
      logo.src = "../Imgs/logo-dark.png";
      barsIcon.style.color = "#222";
    } else {
      scrollItems.forEach((i) => {
        i.classList.remove("scrolling");
      });
      logo.src = "../Imgs/logo-light.png";
      barsIcon.style.color = "#fff";
    }
  }

  // -------------- search icon

  let searchOverlay = document.querySelector(".search-overLay");
  let searchIcon = document.getElementById("search");
  let closeSearch = document.querySelector(".close-Overlay");

  searchIcon.onclick = function () {
    searchOverlay.classList.add("show");
  };

  closeSearch.onclick = function () {
    searchOverlay.classList.remove("show");
  };

  // --------------------PlayVideo--------------------

  let icon = document.getElementById("play-video");
  let popUp = document.getElementById("popup");
  let closeVideo = document.getElementById("closePop");

  function playVideoFun() {
    popUp.classList.add("play");
  }
  function closeVideoFun() {
    popUp.classList.remove("play");
  }

  icon.onclick = playVideoFun;
  closeVideo.onclick = closeVideoFun;
}
