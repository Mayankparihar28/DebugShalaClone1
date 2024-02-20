import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const imageStyle = {
    borderRadius: "0.5rem",
    borderWidth: "1px",
    borderColor: "black",
    filter:
      "drop-shadow(0px 1px 0px rgba(255, 255, 255)) drop-shadow(1px 0px 0px rgba(255, 255, 255))", // No blur (0px) for both shadows
  };
  const textStyle = {
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "black",
    color: "white",
    textShadow: "1px 1px 0px #fff", // Shadow to the right and bottom
  };

  return (
    <>
      <div className="h-auto flex-col sm:flex-row md:flex-row lg:flex gap-10 w-full overflow-hidden pt-40 ">
        <div
          className=" w-1/2 flex bg-no-repeat h-full"
          style={{
            backgroundImage: "url('assets/images/asset62.png')",
          }}
        >
          <div className="sm:pl-28">
            <h1
              style={textStyle}
              className="text-7xl  text-white  font-galano-grotesque-demo"
            >
              Become a
            </h1>
            <h1
              style={textStyle}
              className="text-6xl text-white font-galano-grotesque-demo m-0"
            >
              Data_Science
            </h1>
            <p className=" text-3.2rem text-white font-galano-grotesque-demo mt-3">
              Unlock your potential with DebugShala, Indore premier training and
              placement institute. Elevate your career with our expert-led
              courses and guaranteed placement assistance.
            </p>
            <div className="mt-6">
              <Link
                to="/form"
                class="animate-pulse relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"target="_blank"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" ></span>
                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Enroll Now
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/*left div end*/}
        <div
          className=" sm:w-1/2 bg-contain relative lg:-mt-28 sm:ml-44"
          style={{
            backgroundImage: "url('assets/images/asset1.svg')",
          }}
        >
          {/*Grid start */}
          <div className="grid grid-cols-7 grid-rows-7 gap-0 h-auto w-8/12">
            <div className="h-16 w-16 "></div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black  h-14 w-14"
                src="assets/images/asset19.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 2.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 18.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 9.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 6.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 23.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 12.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className=" h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 3.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className=" h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 10.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 21.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 14.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 8.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className=" h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 22.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 17.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 4.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 11.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 20.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 13.webp"
                alt="django"
              />
            </div>
            <div className="h-16 w-16"></div>
            <div className="   h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 15.webp"
                alt="django"
              />
            </div>
            <div className="   h-16 w-16"></div>
            <div className="   h-16 w-16"></div>
            <div className="   h-16 w-16"></div>
            <div className="   h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 16.webp"
                alt="django"
              />
            </div>
            <div className="   h-16 w-16"></div>
            <div className="   h-16 w-16">
              <img
                style={imageStyle}
                className="rounded-lg border border-black shadow-white h-14 w-14"
                src="assets/images/asset 5.webp"
                alt="django"
              />
            </div>
            <div className="   h-16 w-16"></div>
            <div className="   h-16 w-16"></div>
          </div>
          {/*grid end */}
        </div>
      </div>
      {/*slide images */}
      <div className="h-44  "></div>
      <div className="h-96">
        <p className="flex justify-center text-white text-lg">
          Envision Your Future in Top Companies with DebugShala.
        </p>

        <div className="mb-96">
          <div class="flex overflow-hidden w-full">
            <div class="animate-scrolling-images flex w-full gap-10">
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 25.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 26.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 27.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 28.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 29.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 30.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 31.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 32.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 33.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
              <div className="h-24 w-24">
                <img
                  src="assets/images/asset 34.webp"
                  alt=" 8"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div class="animate-scrolling-images-reverse flex w-full gap-10">
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 25.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 26.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 27.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 28.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 29.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 30.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 31.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 32.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 33.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            <div className="h-24 w-24">
              <img
                src="assets/images/asset 34.webp"
                alt=" 8"
                className="w-full"
              />
            </div>
            
          </div>
        </div>
      </div>honda shine
    </>
  );
}

export default Hero;