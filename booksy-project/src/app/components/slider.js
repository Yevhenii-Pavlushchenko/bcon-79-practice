import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

const heroSliderOpyions = {
  spaceBetween: 16,
  modules: [Navigation],
  navigation: {
    nextEl: ".hero-btn-next",
    prevEl: ".hero-btn-prev",
  },
};
const heroSlider = new Swiper(".hero-swiper", heroSliderOpyions);
