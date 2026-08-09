import { useRef } from "react";

import manrock from "../../../assets/man-rock.png";
import Customer1 from "../../../assets/Customer-1.jpg";
import Customer2 from "../../../assets/Customer-2.jpg";
import Customer3 from "../../../assets/Customer-3.jpg";

import Mainbtn from "../../Buttons/Mainbtn";
import DestinationCard from "../../DestinationCard/DestinationCard";

import destinations from "../../../Data/TopDestination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Icon } from "@iconify/react";

const TopDestination = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20 bg-[#DBEEEE]">
      <div className="bg-secondary rounded-2xl relative overflow-hidden px-5 sm:px-8 py-10 md:py-14">
        {/* Background Image */}
        <img
          src={manrock}
          alt="Traveler"
          className="
            absolute
            right-0
            top-0
            w-220px
            md:w-350px
            xl:w-500px
            opacity-20
            xl:opacity-100
            pointer-events-none
            select-none
            z-0
            img-blend-mask-all
          "
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 pb-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-yellow">Most Favorite </span>
              Tour Places!
            </h1>

            <p className="text-gray-300 tracking-wide mt-4">
              Choosing a destination can be exciting but also a bit
              overwhelming with so many amazing places out there. Let's narrow
              it down. Are you dreaming of peaceful nature, buzzing cities,
              historical wonders, or relaxing beaches?
            </p>

            {/* Customers + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
              <div className="flex items-center">
                <img
                  src={Customer1}
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />

                <img
                  src={Customer2}
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
                />

                <img
                  src={Customer3}
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
                />

                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-yellow">
                    3.5k+
                  </h3>

                  <p className="text-white text-sm">
                    Happy Customers
                  </p>
                </div>
              </div>

              <Mainbtn
                text="View More Destinations"
                to="/destinations"
              />
            </div>
          </div>

          {/* Big Title */}
          <div>
            <h2
              className="
                uppercase
                font-bold
                leading-none
                text-[clamp(3rem,10vw,8rem)]
              "
            >
              <span className="text-yellow">Top!</span>

              <span className="block text-white">
                Destination
              </span>
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Prev Button */}
          <button
            ref={prevRef}
            aria-label="Previous destination"
            className="
              swiper-prev
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-yellow
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              cursor-pointer
            "
          >
            <Icon icon="ep:arrow-left-bold" width={24} />
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            aria-label="Next destination"
            className="
              swiper-next
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-yellow
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              cursor-pointer
            "
          >
            <Icon icon="ep:arrow-right-bold" width={24} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            speed={800}
            grabCursor
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl =
                prevRef.current;
              swiper.params.navigation.nextEl =
                nextRef.current;
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="destination-swiper px-10"
          >
            {destinations.map((item) => (
              <SwiperSlide key={item.id}>
                <DestinationCard
                  title={item.title}
                  listing={item.listing}
                  image={item.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopDestination;