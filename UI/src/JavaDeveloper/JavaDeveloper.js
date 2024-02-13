import { Link } from "react-router-dom";
function JavaDeveloper() {
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
          className="bg-gradient-to-r from-[#043b5b] to-[#57becb] w-4/5 flex flex-col items-center rounded-lg pb-10"
        >
          <div className=" w-10/12 flex justify-center py-5">
            <h1 className="text-white text-6xl font-bold">
              Data Science Course Details{" "}
            </h1>
          </div>
          {/*Inner div */}
          <div
            id="inner_div"
            className=" w-11/12  flex justify-center rounded-xl"
          >
            <div className="p-10 pb-10 mt-12 w-11/12 bg-black rounded-xl flex ">
              <div className="pb-14 w-4/5 bg-gradient-to-r from-[#043b5b] to-[#57becb] flex flex-col items-center rounded-lg">
                <h1 className="p-12 pt-16 text-white font-bold text-5xl">
                  Ready to Enroll?
                </h1>
                <p className="text-xl text-white p-12 text-medium">
                  Ready to understand the power of data in a hands-on way?
                  <br />
                  <br />
                  Join DebugShalas Data Science course for an immersive, offline
                  learning experience. Designed for real-world applications,
                  this program will enhance your skills and open doors to
                  exciting opportunities.
                  <br />
                  <br /> Dont miss out – apply now and start your journey into
                  the world of Data Science.
                  <br />
                  <br />
                </p>
                <Link to="/form">  <button className="bg-blue-600 text-white text-xl font-bold w-4/5 p-8 rounded-lg hover:text-black hover:bg-blue-700">
                  Enroll Now
                </button></Link>
              </div>
              {/*Second_inner_div*/}
              <div className="w-4/5 bg-black flex flex-col items-center">
                <img className="p-12" src="assets/images/java.png" alt="" />
                <h1 className="text-white text-2xl font-bold">
                  What you’ll get...
                </h1>
                {/*1 */}
                <div className="flex p-6 ">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center  border-2 border-solid border-blue-500 rounded-xl mr-2 ">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                    Practical Java Learning:
                    </span>{" "}
                    Implement Java Web Development concepts practically for robust solutions.
                  </p>
                </div>
                {/*2 */}
                <div className="flex p-6 ">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center  border-2 border-solid border-blue-500 rounded-xl mr-2 ">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                    Study Space by Debugshala:
                    </span>{" "}   
                   Dashboard for monitoring, Java course progress.
                  </p>
                </div>
                {/*3 */}
                <div className="flex p-6 ">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center  border-2 border-solid border-blue-500 rounded-xl mr-2 ">
                    <p className="text-white">✔️</p>{" "}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                    Interactive Community & Placement Support:
                    </span>{" "}
                    Connect with peers, access to high-quality network, ensure placements.
                
                  </p>
                </div>
                {/*4 */}
                <div className="flex p-6 ">
                  <div className="p-4 m-1 w-5 h-5 flex justify-center items-center  border-2 border-solid border-blue-500 rounded-xl mr-2 ">
                    <p className="text-white">✔️</p>
                    {/** */}
                  </div>
                  <p className="text-white text-lg">
                    <span className="font-bold text-lg">
                    AI Guide - Yukti:
                    </span>{" "}
                    Java journey guided by personal AI assistant Yukti.
                
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

export default JavaDeveloper;
