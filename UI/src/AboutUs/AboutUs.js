import { Link } from "react-router-dom";

function AboutUs() {
 
 
  const textStyle = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
    color: "white",
    textShadow: "1px 1px 0px #fff", // Shadow to the right and bottom
  };
  return (
    <>
      <div className="h-screen flex  justify-center items-center bg-[#030a21]">
        <div className="h-96 w-1/2 flex flex-col justify-center items-center gap-6">
          <h1
            style={textStyle}
            className="text-7xl text-center leading-tight text-white  font-PlusJakartaSans"
          >
            Indores Premiere Training & Placement Institute
          </h1>
          <div className="w-4/5">
            <p className=" text-xl text-center text-white font-PlusJakartaSans mt-3">
              Empower your career with industry-aligned programs at DebugShala.
              Together, lets shape a future where education fuels real-world
              success.
            </p>{" "}
          </div>
          <div className="">
            <Link
              to="#_"
              className="animate-pulse relative inline-flex items-center justify-start px-14 py-6 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Book your free counseling
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex justify-center items-center ">
        <div className="w-1/2 flex justify-center items-center">
          {" "}
          <div className="w-[70%] flex flex-col gap-6">
            {" "}
            <h1 style={textStyle}
            className="text-[48px]  leading-tight text-white  font-PlusJakartaSans">Interested in Joining <br/>DebugShala?</h1>
            <div className="">
              <Link
                to="#_"
                className="animate-pulse relative inline-flex items-center justify-start px-8 py-4 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Lets Talk
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 "><img className="center " src="assets/images/team.webp" alt=""/></div>
      </div>
    </>
  );
}

export default AboutUs;
