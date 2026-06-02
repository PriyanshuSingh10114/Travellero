import React from "react";

const DestinationCard = ({ title, listing, image }) => {
  return (
    <div
      className="
        group
        relative
        h-420px
        overflow-hidden
        rounded-3xl
        cursor-pointer
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/90
          via-black/40
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          p-6
        "
      >
        <span
          className="
            inline-block
            bg-yellow
            text-secondary
            text-sm
            font-semibold
            px-3
            py-1
            rounded-full
            mb-3
          "
        >
          {listing} Listings
        </span>

        <h3
          className="
            text-3xl
            font-bold
            text-white
            mb-2
          "
        >
          {title}
        </h3>

        <div
          className="
            flex
            items-center
            gap-2
            text-white
            opacity-0
            translate-y-3
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-300
          "
        >
          <span>Explore Destination</span>
          →
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;