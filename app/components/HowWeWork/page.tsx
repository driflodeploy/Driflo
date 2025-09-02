import React from "react";

const HowWeWork = () => {
  return (
    <section className="bg-brand-blueHover py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12 items-center">
        {/* Top Row - Heading and Description in Flex */}
        <div className="flex flex-col text  lg:flex-row  lg:justify-between gap-8 w-full items-center lg:items-start">
          {/* Main Heading */}
          <div className="flex-1">
            <h1 className="leading-[1.2] text-6xl font-bold text-white ">
              Build custom apps with{" "}
              <span className="bg-white text-brand-blueHover">
                cutting-edge
              </span>{" "}
              technology
            </h1>
          </div>
          {/* Description */}
          <div className="flex-1 lg:max-w-lg p-4">
            <p className="text-gray-100 text-lg leading-relaxed">
              We are a specialized development team creating custom websites,
              web applications, and headless Shopify stores. With expertise in
              modern frameworks and e-commerce solutions, we transform your
              ideas into powerful digital experiences that drive results.
            </p>
          </div>
        </div>

        {/* Bottom Row - Two Boxes in Flex Row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start w-full">
          {/* Stats Card Box */}
          <div className="w-full lg:w-1/3">
            <div className="bg-black rounded-3xl p-8 h-80 flex flex-col justify-between items-center">
              <div className="space-y-6 w-full text-center">
                {/* Main Stat */}
                <div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl font-bold text-white">150</span>
                    <span className="text-4xl font-bold text-white ml-1">
                      +
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg mt-2">
                    Apps & stores delivered successfully
                  </p>
                </div>
              </div>
              {/* Tech Stack Icons */}
              <div className="flex items-center space-x-3 justify-center">
                <div className="flex space-x-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">R</span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">N</span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">S</span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">TS</span>
                  </div>
                </div>
                <span className="text-white text-3xl font-light ml-2">+</span>
              </div>
            </div>
          </div>

          {/* Our Process Box */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-200 rounded-3xl p-12 h-80 flex flex-col justify-center items-center relative">
              {/* Our Process Text */}
              <h2 className="text-4xl font-bold text-gray-400 tracking-[0.3em] text-center">
                OUR PROCESS
              </h2>

              {/* Play Button */}
              <div className="absolute bottom-8 right-8">
                <button className="bg-green-400 hover:bg-green-500 transition-colors duration-200 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
