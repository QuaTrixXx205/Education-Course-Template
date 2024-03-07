//sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// dropdown
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var isActive = dropdown.classList.toggle("active");
  if (!isActive) {
    dropdown.classList.add("disable");
  }
}
// Icon dropdown
$(".rotate").click(function () {
  $(this).toggleClass("down");
});

//sidebar-search
function openNav_Search() {
  document.getElementById("mySidenav-Search").style.height = "100%";
}
function closeNav_Search() {
  document.getElementById("mySidenav-Search").style.height = "0";
}
console.log("asd");


var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      576: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      992: {
          slidesPerView: 3, 
          spaceBetween: 20
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      1400: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      1770: {
          slidesPerView: 4,
          spaceBetween: 20
      }
    },
    autoplay: {     
      delay: 3000, //3s
    }, 
  });
