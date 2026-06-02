import titleShape from "../../../assets/Title-Shape.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import tst1 from "../../../assets/testimonials-01.jpg";
import tst2 from "../../../assets/testimonials-02.jpg";
import tst3 from "../../../assets/testimonials-03.jpg";
import tst4 from "../../../assets/testimonials-04.jpg";
import tst5 from "../../../assets/testimonials-05.jpg";
import tst6 from "../../../assets/testimonials-06.jpg";

import { Icon } from "@iconify/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kavin Martin",
      image: tst1,
      review:
        "Travellero made our vacation seamless and stress-free. Everything from bookings to recommendations was perfectly organized.",
    },
    {
      id: 2,
      name: "Alex Morgan",
      image: tst2,
      review:
        "The destinations suggested were amazing. We discovered places we would never have found on our own.",
    },
    {
      id: 3,
      name: "John Carter",
      image: tst3,
      review:
        "Excellent service and support throughout our journey. Highly recommended for travelers.",
    },
    {
      id: 4,
      name: "Sophia Lee",
      image: tst4,
      review:
        "Beautiful travel experience. The planning process was smooth and the destinations exceeded expectations.",
    },
    {
      id: 5,
      name: "Daniel Smith",
      image: tst5,
      review:
        "Professional service with attention to detail. Every part of the trip was handled perfectly.",
    },
    {
      id: 6,
      name: "Emma Watson",
      image: tst6,
      review:
        "One of the best travel platforms I have used. Everything felt premium and well organized.",
    },
  ];

  return (
    <section className="bg-[#effefe] px-[5%] lg:px-[8%] py-16 lg:py-24">
      {/* Title */}
      <div className="flex flex-col items-center text-center relative mb-16">
        <h2 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-yellow">Our Clients</span> Say!
        </h2>

        <p className="text-secondary/80 mt-3 max-w-2xl">
          Real experiences from travelers who explored the world with us.
        </p>

        <img
          src={titleShape}
          alt="shape"
          className="w-120px md:w-180px object-contain absolute -bottom-8"
        />
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        loop
        grabCursor
        speed={800}
        spaceBetween={24}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                md:p-8
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                h-full
              "
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    icon="material-symbols:star-rounded"
                    width="22"
                    height="22"
                    className="text-yellow"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-secondary/80 text-lg leading-relaxed mb-8">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary">
                    {item.name}
                  </h3>

                  <span className="text-yellow font-medium">
                    Traveler
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;