const swiperHero = new Swiper('.swiper-hero', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.main-button-next',
        prevEl: '.main-button-prev',
    },
});

const swiperLizing = new Swiper('.swiper-lizing', {
    spaceBetween: 40,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 40,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1280: {
        allowTouchMove: true,
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1921: {
        allowTouchMove: true,
        slidesPerView: 5,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-partners',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.main-button-next',
        prevEl: '.main-button-prev',
    },
});