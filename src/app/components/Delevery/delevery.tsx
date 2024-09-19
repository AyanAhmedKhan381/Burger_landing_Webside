import Image from "next/image";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { RiEBike2Fill } from "react-icons/ri";

const Delevery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid-cols-1 lg:grid-cols-2 gap-[3rem] md:flex">
        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image
            src={"/pictures/Food Delevery image.png"}
            height={800}
            width={800}
            alt="image"
          />
        </div>
        {/* Text content */}
        <div className="w-[50%]">
          <h1
            className="text-[30px] mt-20 uppercase md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[3rem]
             md:leading-[4rem] text-black font-bold "
          >
            Your <span className="text-red-600">Favorite Burger</span><br /> On the Way
          </h1>
          {/* Description */}
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70 line-clamp-3 ">
            Experience lightning-fast delivery that brings your favorite meals
            directly to your doorstep. Our dedicated team ensures your food
            arrives fresh and hot, so you can indulge in deliciousness without
            the wait. Satisfaction is just a click away!
          </p>

          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600"/>
            <h1 className="text-[18px] text-black font-medium">Delevery in 30 minutes</h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600"/>
            <h1 className="text-[18px] text-black font-medium">Free shipping from 75$</h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600"/>
            <h1 className="text-[18px] text-black font-medium">Delivery on your Doorstep</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Delevery;
