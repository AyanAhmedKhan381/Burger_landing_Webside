import Image from "next/image";


interface Props {
  image :string;
  name :string;
  position : string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TeamCard = ({ image, name, position }:Props) => {
  return <div>

    {/* Image */}
    <Image
     src={image}
     alt={"image"}
     height={400}
     width={400}
     className="rounded-2xl mx-auto"/>

    {/* Name */}
    <h1 className="text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold">
    {name}
    </h1>

    {/* Position */}
    <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit font-medium">
        {position}
    </p>
    {/* description */}
    <p className="text-center md:w-[70%] mx-auto text-gray-600 mt-[1rem] line-clamp-2">
        A chef is a culinary expert who prepares, cooks, and creates innovative dishes,
        balancing flavors, presentation, and techniques to delight diners senses.
    </p>

  </div>;
};

export default TeamCard;
