"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerCart from "./BurgerCart";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
        <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span> 
        </h1>

        <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={false}>

    {/* Burger Card */}
        <BurgerCart title="Beefy Bite" image="/images/b2.png" reviews="6" price={"10.88$"}/>
        <BurgerCart title="Bold Bite" image="/images/b3.png" reviews="5" price={"7.88$"}/>
        <BurgerCart title="Rich Bite" image="/images/b4.png" reviews="7" price={"7.55$"}/>
        <BurgerCart title="Juicy Munch" image="/images/b5.png" reviews="4" price={"9.88$"}/>
        <BurgerCart title="Tasty Chunk" image="/images/b6.png" reviews="6" price={"8.88$"}/>



    </Carousel>
        </div>

    </div>
  )
}
export default PopularBurger
