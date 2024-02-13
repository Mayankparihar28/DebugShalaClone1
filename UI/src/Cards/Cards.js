import React from "react";

function Cards() {
  const imageStyle = {
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "black",
    filter:
      "drop-shadow(0px 3px 0px rgba(255, 255, 255)) drop-shadow(3px 0px 0px rgba(255, 255, 255))", // No blur (0px) for both shadows
  };
  return (
    <>
      <div
        className=" flex items-center justify-around bg-[#030a21] h-72 overflow-hidden"
        style={{
          backgroundImage: "url('assets/images/asset 64.svg')",
        }}
      >
        <div className="w-80% flex  justify-around gap-16">
          {/*first */}
          <div className="bg-white grid grid-rows-3 grid-flow-col rounded-xl ">
            <div className="py-0 px-4 row-span-3 flex items-center">
              <img
                className="h-14 w-14"
                src="assets/images/Yukti Icon.webp"
                alt="yukti icon"
              />
            </div>
            <div className="py-2 px-4 col-span-2">
              <h1 className="font-medium text-lg opacity-75 ">Yukti AI</h1>
            </div>
            <div className="py-0 px-4 row-span-2 col-span-2">
              <h1 className="font-bold text-xl">
                {" "}
                Indores First Edu AI <br />
                Assistant
              </h1>
            </div>
          </div>
          {/*second */}
          <div className="bg-white grid grid-rows-3 grid-flow-col rounded-xl">
            <div className="py-0 px-4 row-span-3 flex items-center">
              <img
                className="h-14 w-14"
                src="assets/images/asset 47.webp"
                alt="timer icon"
              />
            </div>
            <div className="py-2 px-4 col-span-2">
              <h1 className="font-medium text-lg opacity-75 ">Study Space</h1>
            </div>
            <div className="py-0 px-4 row-span-2 col-span-2">
              <h1 className="font-bold text-xl">
                Progress Tracking <br /> Dashboard
              </h1>
            </div>
          </div>
          {/*third */}
          <div className="bg-white grid grid-rows-3 grid-flow-col rounded-xl">
            <div className="py-0 px-4 row-span-3 flex items-center">
              <img
                className="h-14 w-14"
                src="assets/images/google.png"
                alt="google icon"
              />
            </div>
            <div className="py-2 px-4 col-span-2 ">
              <h1 className="font-medium text-lg opacity-75 ">
                Google Reviews
              </h1>
            </div>
            <div className="py-2 px-4 row-span-2 col-span-2">
              <h1 className="font-bold text-xl">Top Rated 5/5 (70+)</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#030a21] to-[#165e67] h-screen flex  items-center justify-center overflow-hidden">
        <div className="flex items-center justify-around w-4/5">
          {/*first div  */}
          <div
            className="bg-gradient-to-r from-[#030a21] to-[#165e67] rounded-full"
            style={imageStyle}
            >
            <div className="p-10">
              <img
                className="w-80 "
                src="assets/images/asset 50.svg"
                alt="java developer"
              />
            </div>
            <div className="p-2 ">
              <h1 className=" pl-8 text-white text-3xl">Data Science</h1>
            </div>
            <div className=" p-2 pb-4 flex">
              <h2 className="pl-8 text-white text-lg">See Courses</h2>
              <img
                className="pt-1"
                src="assets/images/arrowRight.svg"
                alt="arrow"
              />
            </div>
          </div>
          {/*Second div  */}
          <div
          className="bg-gradient-to-r from-[#030a21] to-[#165e67] rounded-full"
          style={imageStyle}
          >
          <div className="p-10">
            <img
              className="w-80 "
              src="assets/images/asset 51.svg"
              alt="java developer"
            />
          </div>
          <div className="p-2 ">
            <h1 className=" pl-8 text-white text-3xl">MERN Stack Development</h1>
          </div>
          <div className=" p-2 pb-4 flex">
            <h2 className="pl-8 text-white text-lg">See Courses</h2>
            <img
              className="pt-1"
              src="assets/images/arrowRight.svg"
              alt="arrow"
            />
          </div>
        </div>
          {/*third div  */}
          <div
            className="bg-gradient-to-r from-[#030a21] to-[#165e67] rounded-full"
            style={imageStyle}
            >
            <div className="p-10">
              <img
                className="w-80 "
                src="assets/images/asset 52.svg"
                alt="java developer"
              />
            </div>
            <div className="p-2 ">
              <h1 className=" pl-8 text-white text-3xl">Java Web Development</h1>
            </div>
            <div className=" p-2 pb-4 flex">
              <h2 className="pl-8 text-white text-lg">See Courses</h2>
              <img
                className="pt-1"
                src="assets/images/arrowRight.svg"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
