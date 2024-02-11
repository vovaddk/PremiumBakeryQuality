$(".insta-slides").slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: true,
  dots: false,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 1166,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 425,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
  ],
});
