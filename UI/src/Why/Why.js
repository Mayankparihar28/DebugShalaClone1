import { svg1, svg2, svg3 } from "./svg";
import "./Why.css";

function Why() {
  return (
    <>
      {/* */}
      {/*Main div */}
      <div className=" bg-gradient-to-r from-[#031517] to-[#4c949e] pt-24 ">
        {/*first div */}
        <div
          style={{
            backgroundImage: "url('assets/images/asset 64.svg')",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center h-auto">
            <div className=" w-4/5 flex flex-col sm:flex-row">
              <div className="w-[100%] block">
                <h1 className="font-medium text-white text-5xl pb-10">
                  Why DebugShala?
                </h1>
                <p className="font-normal text-white text-2xl ">
                  {" "}
                  Choose DebugShala for a Future-Ready Edge. With Unparalleled
                  Practical Learning, Personalized Guidance, and a Clear Path to
                  Career Success
                </p>
              </div>
              <div className="justify-end items-center block">
                <div className="w-[92%] flex sm:flex-row justify-between">
                  <div className="absolute  justify-center  h-20 block">
                    <div className="w-50 h-5  z-[10]" class="box"></div>
                  </div>
                  <div className="h-20 w-20 bg-[#0e1e20] flex justify-center items-center rounded-md border-[#7e8f95] border-2 z-[20]">
                    {" "}
                    <img
                      className="w-4/5 h-4/5 "
                      src="assets/images/asset 53.webp"
                      alt=""
                    />
                  </div>
                  <div className="h-20 w-20 bg-[#0e1e20] flex justify-center items-center rounded-md border-[#7e8f95] border-2 z-[20]">
                    {" "}
                    <img
                      className="w-4/5 h-4/5"
                      src="assets/images/asset 54.webp"
                      alt=""
                    />
                  </div>
                  <div className="h-20 w-20 bg-[#0e1e20] flex justify-center items-center rounded-md border-[#7e8f95] border-2 z-[20]">
                    {" "}
                    <img
                      className="w-4/5 h-4/5"
                      src="assets/images/asset 55.webp"
                      alt=""
                    />
                  </div>
                  <div className="h-20 w-20 bg-[#0e1e20] flex justify-center items-center rounded-md border-[#7e8f95] border-2 z-[20]">
                    {" "}
                    <img
                      className="w-4/5 h-4/5"
                      src="assets/images/asset 56.webp"
                      alt=""
                    />
                  </div>
                  <div className="h-20 w-20 bg-[#0e1e20] flex justify-center items-center rounded-md border-[#7e8f95] border-2 z-[20]">
                    {" "}
                    <img
                      className="w-4/5 h-4/5"
                      src="assets/images/asset 57.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*second div */}
        <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-10 w-[90%] ">
        {/* Item 1 */}
        <div className="p-4 flex flex-col gap-10">
          <div className="flex-1 bg-cover gap-4 p-10 rounded-xl" style={{
            backgroundImage: "url('assets/images/svg1.png')",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}>
            <div className="h-10 w-10">{svg1}</div>
            <h1 className="text-white text-2xl font-bold">
              Practical Training Approach
            </h1>
            <p className="text-white opacity-70 text-lg">
              Our curriculum emphasizes hands-on learning, ensuring you gain
              real-world skills from day one.
            </p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="p-4 flex flex-col gap-10">
          <div className="flex-1 bg-cover gap-4 p-10 rounded-xl" style={{
            backgroundImage: "url('assets/images/svg2.png')",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}>
            <div className="h-10 w-10">{svg2}</div>
            <h1 className="text-white text-2xl font-bold">
              AI-Assisted Training
            </h1>
            <p className="text-white opacity-70 text-lg">
              We utilize the power of AI to enhance your learning experience,
              streamline the training and development process using Yukti,
              Debugshala’s own AI assistant and Study Space - Productivity Partner.
            </p>
          </div>
        </div>
        {/* Item 3 */}
        <div className="p-4 flex flex-col gap-10">
          <div className="flex-1 bg-cover gap-4 p-10 rounded-xl" style={{
            backgroundImage: "url('assets/images/svg3.png')",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}>
            <div className="h-10 w-10">{svg3}</div>
            <h1 className="text-white text-2xl font-bold">
              Interactive Developer Community
            </h1>
            <p className="text-white opacity-70 text-lg">
              Join our interactive community, where collaboration and innovation
              thrive, connecting you with like-minded tech learners and developers.
            </p>
          </div>
        </div>
        {/* Item 4 */}
        <div className="p-4 flex flex-col gap-10">
          <div className="flex-1 bg-cover gap-4 p-10 rounded-xl" style={{
            backgroundImage: "url('assets/images/svg4.png')",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}>
            <div className="h-10 w-10">{svg3}</div>
            <h1 className="text-white text-2xl font-bold">
              Practical Training Approach
            </h1>
            <p className="text-white opacity-70 text-lg">
              Our curriculum emphasizes hands-on learning, ensuring you gain
              real-world skills from day one.
            </p>
          </div>
        </div>
      </div>
      
        </div>
      </div>
    </>
  );
}

export default Why;
