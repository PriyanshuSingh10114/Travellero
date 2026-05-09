import React, { useEffect, useState } from "react";

import counter1 from "../../../assets/count-icon1.png";
import counter2 from "../../../assets/count-icon2.png";
import counter3 from "../../../assets/count-icon3.png";
import counter4 from "../../../assets/count-icon4.png";

const counters = [
  {
    id: 1,
    title: "Awards Winning",
    value: 3600,
    suffix: "+",
    image: counter1,
  },
  {
    id: 2,
    title: "Happy Traveler",
    value: 7634,
    suffix: "+",
    image: counter2,
  },
  {
    id: 3,
    title: "Tours Success",
    value: 2.5,
    suffix: "K",
    image: counter3,
    decimals: 1,
  },
  {
    id: 4,
    title: "Our Experience",
    value: 25,
    suffix: "+",
    image: counter4,
  },
];

const CounterItem = ({ item }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = item.value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [item.value]);

  return (
    <div className="counter-item flex items-center gap-6 border border-dashed border-gray-50/20 rounded-lg px-5 py-8">
      <img
        src={item.image}
        alt="counter-img"
        className="w-14 h-14"
      />

      <div className="counter-content">
        <h4 className="text-white text-lg font-medium">
          {item.title}
        </h4>

        <span className="text-yellow text-5xl font-bold font-afacad">
          {item.decimals
            ? count.toFixed(item.decimals)
            : Math.floor(count)}
          {item.suffix}
        </span>
      </div>
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter-wrap bg-secondary px-[2%] sm:px-[8%] lg:px-[12%] py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {counters.map((item) => (
        <CounterItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Counter;