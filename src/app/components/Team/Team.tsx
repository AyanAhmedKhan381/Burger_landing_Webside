import TeamCard from "./TeamCard"




const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
        {/* Heading */}
      <h1 className="heading">MEET Our expert <span className="text-red-600">Chefs</span></h1>

      {/* Content */}
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-[3rem] items-center ">

        {/* Team Card */}
        
        {/* 1st */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300" >
          <TeamCard image="/images/t1.jpg" name="Salt Bae" position="Kitchen Porter"/>
        </div>

        {/* 2nd */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <TeamCard image="/images/t2.jpg" name="Daniel Humm" position="Executive chef"/>
        </div>

        {/* 3rd */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600">
        <TeamCard image="/images/t3.jpg" name="Joan Roca" position="Head Chef"/>
        </div>
       
       
      </div>

    </div>
  )
}

export default Team
