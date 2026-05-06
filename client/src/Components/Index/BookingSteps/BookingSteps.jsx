import titleShape from "../../../assets/Title-Shape.png";
import StepsIcon1 from "../../../assets/Steps-Icon1.png";
import StepsIcon2 from "../../../assets/Steps-Icon2.png";
import StepsIcon3 from "../../../assets/Steps-Icon3.png";
import Mainbtn from "../../Buttons/Mainbtn";


const stepsData = [
    {
        id: 1,
        number: "01",
        title: "Choose Destination",
        description:
            "All you have to do is, first select your preferred destination and proceed",
        icon: StepsIcon1,
    },
    {
        id: 2,
        number: "02",
        title: "Make Payment",
        description:
            "You are important to us. We pay attention to the quality of  service we provide to you.",
        icon: StepsIcon2,
    },
    {
        id: 3,
        number: "03",
        title: "Ready For Travelling",
        description:
            "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
        icon: StepsIcon3,
    },
];

function BookingSteps() {
  return (
    <>
      <div className="px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%]">
        <div className="title flex flex-col justify-center items-center text-center relative pb-10">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Easy Steps For Bookings
          </h1>
          <p className="text-secondary my-2 text-lg">
            Destinations worth exploring! Here are a few popular spots
          </p>  
           <img src={titleShape} alt="title-shape" className="w-[35%] object-contain absolute -bottom-12"/> 
        </div>

      </div>
    </>
  );
}

export default BookingSteps;