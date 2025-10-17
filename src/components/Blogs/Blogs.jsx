import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaArrowLeftLong } from "react-icons/fa6";

const Blogs = () => {
    return (
        <div>
            <div className='lg:text-7xl text-4xl mt-20 text-gray-400 font-bold meie-script-font text-center lg:mt-50'>
                <Typewriter
                    options={{
                        strings: ['Still Coocking....'],
                        autoStart: true,
                        loop: true,
                    }}
                />

            </div>
     <div className="flex justify-center items-center lg:mt-10 mt-6 ">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-3 text-lg bg-orange-500 hover:bg-orange-600 cursor-pointer text-black px-5 py-2 rounded-lg transition-all duration-200"
      >
        <FaArrowLeftLong className="text-xl" />
        <span>Back to Previous</span>
      </button>
    </div>

        </div>
    );
};

export default Blogs;