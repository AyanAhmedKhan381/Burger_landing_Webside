


const NewsLatter = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">

      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
            join for hot offfers
         </h1>
         <p className="text-black text-opacity-70 w-[80%] md:w-[60%] mx-auto">
         Join us for sizzling hot offers at Burger Joint! Indulge in juicy, mouthwatering burgers with unbeatable deals that will satisfy your cravings. Dont miss out on the ultimate burger experience!
         </p>
         {/* Input and subscrib button */}
         <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* input */}
          <input type="email" placeholder="Email Address" className="px-5 py-4 bg-gray-400 
          w-[40%] outline-none rounded-lg placeholder:text-black" />
          {/* subscrib button */}
          <div>
            <button className="px-7 py-3.5 bg-green-700 text-white text-base
             font-bold rounded-md hover:bg-green-900 duration-300">
            Subscribe
            </button>
          </div>
          
         </div>

      </div>

    </div>
  )
}

export default NewsLatter
