const swiperHero = new Swiper('.swiper-hero', {
    autoplay: {                         
        delay: 5000,  
    },   
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
        spaceBetween: 20,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 40,
        slidesPerView: 5,
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
});
const swiperCompany = new Swiper('.swiper-company', {
    spaceBetween: 40,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      768: {
        allowTouchMove: true,
        spaceBetween: 40,
        slidesPerView: 5,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
      1280: {
        allowTouchMove: true,
        slidesPerView: 6,
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
});


const swiperNews = new Swiper('.swiper-news', {
    spaceBetween: 24,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 1.3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      500: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 2.3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      700: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      900: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row",
        }
      },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-news',
    },
});

const swiperNewsRelated = new Swiper('.swiper-news-related', {
    spaceBetween: 24,
    enabled: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
        spaceBetween: 20,
        slidesPerView: 1.3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      480: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      500: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 2.3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      700: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      900: {
        allowTouchMove: true,
        spaceBetween: 16,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
      1024: {
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        }
      },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination-news',
    },
});


const swiper_thumbnail = new Swiper(".swiper-thumbnail", {
    slidesPerView: 4,
    direction: 'horizontal',
    breakpoints: {
        320: {
          allowTouchMove: true,
          direction: 'vertical',
          slidesPerView: 3,
        },
        768: {
          allowTouchMove: true,
          direction: 'vertical',
          slidesPerView: 3,
        },
        1024: {
          allowTouchMove: true,
          direction: 'horizontal',
          slidesPerView: 3,
        },
        1180: {
          allowTouchMove: true,
          direction: 'horizontal',
          spaceBetween: 24,
          slidesPerView: 4,
        },
        1921: {
          allowTouchMove: true,
          direction: 'horizontal',
          spaceBetween: 24,
          slidesPerView: 5,
        },
    }
})
const swiperDetail = new Swiper('.swiper-detail-card', {       
    pagination: {
        el: '.swiper-pagination-detail',
    },
    thumbs: {
      swiper: swiper_thumbnail,
    },

})