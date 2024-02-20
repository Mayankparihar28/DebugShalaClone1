import { Link } from "react-router-dom";

function MernStack() {
  return (
    <>
      <div
        id="wrapper"
        className="bg-gradient-to-r from-[#051e57] to-[#4c949e] pt-24 flex justify-center"
        style={{
          backgroundImage: "url('assets/images/asset 64.svg')",
        }}
      >
        <div
          id="main_div"
          className="bg-gradient-to-r from-[#043b5b] to-[#57becb] w-full sm:w-4/5 flex flex-col items-center rounded-lg pb-10"
        >
          <div className="w-full sm:w-10/12 flex justify-center py-5">
            <h1 className="text-white text-center text-4xl sm:text-6xl font-bold">
              MERN Stack Development{" "}
            </h1>
          </div>
          {/*Inner div */}
          <div
            id="inner_div"
            className="w-full sm:w-11/12 flex justify-center rounded-xl"
          >
            <div className="p-5 pb-10 sm:p-10 sm:pb-10 mt-12 w-full sm:w-11/12 bg-black rounded-xl flex flex-col sm:flex-row">
              <div className="pb-14 sm:pb-0 w-full sm:w-4/5 bg-gradient-to-r from-[#043b5b] to-[#57becb] flex flex-col items-center rounded-lg">
                <h1 className="p-5 pt-16 sm:p-12 text-white font-bold text-5xl">
                  Ready to Enroll?
                </h1>
                <p className="text-xl text-white p-5 sm:p-12 text-medium">
                  Take your web development skills to the next level with DebugShalas MERN Stack course.
                  <br />
                  <br />
                  Dive into MongoDB, Express.js, React, and Node.js through engaging offline sessions. Gain practical experience, connect with industry professionals, and become job-ready.
                  <br />
                  <br /> Ready to craft your success story? Enroll now and kickstart your journey with MERN Stack mastery.
                  <br />
                  <br />
                </p>
                <Link to="/form">
                  <button className="bg-blue-600 text-white text-xl font-bold w-full sm:w-4/5 p-8 rounded-lg hover:text-black hover:bg-blue-700">
                    Enroll Now
                  </button>
                </Link>
              </div>
              {/*Second_inner_div*/}
              <div className="w-full sm:w-1/2 bg-black flex flex-col items-center">
                <img className="p-5 sm:p-12" src="assets/images/asset 51.svg" alt="" />
                <h1 className="text-white text-2xl font-bold">
                  What you’ll get...
                </h1>
                {/*1 */}
                <div className="flex p-5 sm:p-6">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center border-2 border-solid border-blue-500 rounded-xl mr-2">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                      Hands-On Practical Experience:
                    </span>{" "}
                    Build dynamic web applications and acquire skills that make you job-ready.
                  </p>
                </div>
                {/*2 */}
                <div className="flex p-5 sm:p-6">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center border-2 border-solid border-blue-500 rounded-xl mr-2">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                      Personal AI Assistance:
                    </span>{" "}
                    Automate your MERN Stack journey with AI assistant Yukti.
                  </p>
                </div>
                {/*3 */}
                <div className="flex p-5 sm:p-6">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center border-2 border-solid border-blue-500 rounded-xl mr-2">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                      Progress Tracker & Study Hub: 
                    </span>{" "}
                    Dashboard for tracking, dedicated study space.
                  </p>
                </div>
                {/*4 */}
                <div className="flex p-5 sm:p-6">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center border-2 border-solid border-blue-500 rounded-xl mr-2">
                    <p className="text-white">✔️</p>
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                      Interactive Community, Placement:
                    </span>{" "}
                    Engage, access resources, secure placements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MernStack;
