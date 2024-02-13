import { logoSvg, CrossSvg, svg1, svg2 } from "./logoSvg";
import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function DataScienceCourse() {
  useEffect(() => {
    $("#first").click(function () {
      $("#second").toggle();
    });
  });
  return (
    <>
      <div className="h-auto  flex flex-col justify-center items-center  bg-black">
        <div className="w-[65%] ">
          <div className="flex justify-center items-center p-6">
            <div className="bg-blue-500 w-[75%] h-16 rounded-lg flex items-center justify-center text-white text-lg">
              <h1 className=" ">Want to know more?</h1>
              <Link to="/form"><h1 className="underline hover:text-black">
                Download the Curriculum
              </h1></Link>
              <div className="h-6 w-6 self-start">{CrossSvg}</div>
            </div>
          </div>
          <div className="  w-full flex text-white">
            <div className="w-1/2  p-10 flex flex-col gap-14 ">
              <div>{logoSvg}</div>
              <p className=" text-5xl font-IBN font-bold">
                Become an Expert Data Scientist in just 6 months.
              </p>
              <p className=" text-xl font-IBN font-bold">
                Embrace the power of data by learning practical skills with real
                world insights. <br />
                Enroll now and launch your data science career.
              </p>
              <Link to="/form"> <button className="bg-blue-600 text-white text-xl font-bold w-4/5 p-6 rounded-lg hover:text-black hover:bg-blue-700">
                Enroll Now
              </button></Link>
            </div>
            <div className="w-1/2   ">
              <div className=" pt-16 flex flex-col gap-16">
                <div className="bg-gradient-to-r from-black to-[#4169e1]  p-10 w-full h-56 rounded-xl">
                  <img src="assets/images/asset 50.svg" alt="" />
                </div>
                <div className="bg-gradient-to-r from-[#4169e1] to-[#040e2c] h-64 w-full border-white border-[1px] rounded-xl ">
                  <div className="h-[20%] border-white border-b-[1px] flex justify-center">
                    {" "}
                    <div className="w-[35%] bg-gradient-to-r from-blue-600 to-blue-400 mt-[-5%] h-[135%] border-[1px] rounded-xl ">
                      {" "}
                      <h1 className="text-center">
                        TOP <br />
                        COMPANIES
                      </h1>
                    </div>
                  </div>
                  <div className="h-[80%]  ">
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 px-6">
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 25.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 26.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 27.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 28.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 29.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 30.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 31.webp" alt="" />
                      </div>
                      <div className="w-16 h-16">
                        <img src="assets/images/asset 32.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1a2a5b]  w-full my-24 border-[1px] rounded-xl border-white flex justify-center font-IBN text-white  ">
            <div className="w-11/12 ">
              <div className="p-12 flex flex-col gap-10">
                <h1 className="text-4xl font-bold">Why Choose Data Science?</h1>
                <p className="text-xl ">
                  Although data and analytics are widely acknowledged as
                  essential for business success, a scarcity of qualified
                  professionals and training opportunities impedes their
                  effective adoption.
                </p>
              </div>
              <div className="h-56 rounded-xl border-[1px] border-white mb-10  ">
                <div className="grid grid-cols-4 grid-rows-1 gap-4">
                  <div className="flex items-center justify-center">
                    <div className="w-9/12">
                      <div className="">{svg1}</div>
                      <div className="">
                        2.5 million data science jobs by 2026
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-9/12">
                      <div className="">{svg1}</div>
                      <div className="">
                        2.5 million data science jobs by 2026
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-9/12">
                      <div className="">{svg1}</div>
                      <div className="">
                        2.5 million data science jobs by 2026
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-9/12">
                      <div className="">{svg1}</div>
                      <div className="">
                        2.5 million data science jobs by 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full font-IBN text-white text-4xl text-center font-bold">
              <h1>Who should choose Data Science?</h1>{" "}
            </div>
            <div className=" my-20  grid grid-cols-2 grid-rows-6 gap-5 text-white">
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Data Analyst</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Graduates</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">IT Professionals</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Mathematics and Statistics Graduates</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Business Analysts</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Researchers and Academics</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Engineers</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Healthcare Professionals</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Finance Professionals</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">Marketers</h1>
                </div>
              </div>
              <div className="border-[1px] border-white border-lg rounded-lg flex gap-5 items-center text-2xl px-4 py-3 bg-gradient-to-r from-[#000] to-[#5c5a5a]">
                <div className=" w-12 h-12 bg-green-500 border-8 border-green-800 rounded-full ">
                  {" "}
                  {svg2}
                </div>
                <div>
                  <h1 className="">
                    Anyone interested in learning Data Science and Analytics
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white font-IBN">
            <div className=" text-center text-5xl font-semibold">
              <h1>How does Debugshala navigate the learning experience?</h1>
            </div>
            <div className="text-center text-xl mt-9">
              <p>
                Choosing a course with lectures and modules for a certificate
                isnt enough. DebugShala goes beyond, offering hands-on
                implementation, AI tools, and a performance dashboard for
                practical learning.
              </p>
            </div>
            <div className="m-8 flex gap-12">
              <img className="w-80" src="assets/images/1.webp" alt="" />
              <div className="flex flex-col  justify-center gap-10">
                <h1 className="text-[#01c3ff] text-4xl">
                  Practical Learning Offline
                </h1>
                <p className="text-xl">
                  {" "}
                  Benefit from a carefully curated batches, ensuring a
                  collaborative and enriching learning experience.
                </p>
              </div>
            </div>
            <div className="m-8 flex flex-row-reverse gap-12">
              <img className="w-80" src="assets/images/6.webp" alt="" />
              <div className="flex flex-col  justify-center gap-10">
                <h1 className="text-[#01c3ff] text-4xl">
                  Personalized Training Experience
                </h1>
                <p className="text-xl">
                  {" "}
                  Benefit from a carefully curated batches, ensuring a
                  collaborative and enriching learning experience.
                </p>
              </div>
            </div>
            <div className="m-8 flex gap-12">
              <img className="w-80" src="assets/images/2.webp" alt="" />
              <div className="flex flex-col  justify-center gap-10">
                <h1 className="text-[#01c3ff] text-4xl">
                  Personal AI Assistant - Meet Yukti
                </h1>
                <p className="text-xl">
                  {" "}
                  Navigate your Data Science journey with Yukti, your personal
                  AI assistant at DebugShala.
                </p>
              </div>
            </div>
            <div className="m-8 flex flex-row-reverse gap-12">
              <img className="w-80" src="assets/images/3.webp" alt="" />
              <div className="flex flex-col  justify-center gap-10">
                <h1 className="text-[#01c3ff] text-4xl">
                  Progress Tracking Dashboard and Study Space
                </h1>
                <p className="text-xl">
                  {" "}
                  Track your progress seamlessly with our dedicated dashboard.
                </p>
              </div>
            </div>
            <div className="m-8 flex  gap-12">
              <img className="w-80" src="assets/images/5.webp" alt="" />
              <div className="flex flex-col  justify-center gap-10">
                <h1 className="text-[#01c3ff] text-4xl">
                  Interactive Offline Developer Community
                </h1>
                <p className="text-xl">
                  {" "}
                  You learn and grow best when you are surrounded by like-minded
                  people , You will be made part of a community where you can
                  network, share opportunities, and build relations.
                </p>
              </div>
            </div>
          </div>
          {/*overview start */}
          <div className="text-white my-12">
            <div className=" text-center text-5xl font-semibold">
              <h1>Lets have an overview of the course</h1>
            </div>
            <div className="bg-gradient-to-r from-[#0d1327] to-[#040e2c]  w-full border-white border-[1px] h-96 rounded-xl my-12 ">
              <div className="h-[30%]  border-white border-b-[1px] ">
                {" "}
                <div className="w-32 h-12 ml-12 mt-[-25px] flex justify-center items-center border-white border-[1px] rounded-lg bg-[#4169e1]">
                  <h1 className="uppercase">module 1</h1>
                </div>
                <div className="mb-10">
                  <h1 className="text-2xl font-bold">
                    Python Programming and Data Basics
                  </h1>
                </div>
              </div>
              <div className="h-[70%] flex justify-center bg-[#12182c]">
                <div className="w-10/12 m-10 mb-0">
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Unlocking the Power of Python and MySQL for Data
                    Manipulation
                  </h2>
                  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Master Python fundamentals and syntax.</li>
                    <li>Learn MySQL for database operations.</li>
                    <li>
                      Acquire skills in data extraction and preprocessing.
                    </li>
                    <li>Understand CRUD operations with SQL.</li>
                    <li>Apply Python and MySQL for efficient data handling.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0d1327] to-[#040e2c]  w-full border-white border-[1px] h-96 rounded-xl my-12 ">
              <div className="h-[30%]  border-white border-b-[1px] ">
                {" "}
                <div className="w-32 h-12 ml-12 mt-[-25px] flex justify-center items-center border-white border-[1px] rounded-lg bg-[#4169e1]">
                  <h1 className="uppercase">module 2</h1>
                </div>
                <div className="mb-10">
                  <h1 className="text-2xl font-bold">Data Visualization</h1>
                </div>
              </div>
              <div className="h-[70%] flex justify-center bg-[#12182c]">
                <div className="w-10/12 m-10 mb-0">
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Crafting Compelling Narratives with Data: The Art of
                    Visualization
                  </h2>
                  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Explore data visualization importance in analysis.</li>
                    <li>
                      Create static visualizations with Matplotlib and Seaborn.
                    </li>
                    <li>Explore Data Visualization dashboards with PowerBI.</li>
                    <li>Conduct an exploratory data analysis project.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0d1327] to-[#040e2c]  w-full border-white border-[1px] h-96 rounded-xl my-12 ">
              <div className="h-[30%]  border-white border-b-[1px] ">
                {" "}
                <div className="w-32 h-12 ml-12 mt-[-25px] flex justify-center items-center border-white border-[1px] rounded-lg bg-[#4169e1]">
                  <h1 className="uppercase">module 3</h1>
                </div>
                <div className="mb-10">
                  <h1 className="text-2xl font-bold">Machine Learning</h1>
                </div>
              </div>
              <div className="h-[70%] flex justify-center bg-[#12182c]">
                <div className="w-10/12 m-10 mb-0">
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    From Data to Decisions: A Journey into Machine Learning
                  </h2>
                  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Grasp machine learning concepts and types.</li>
                    <li>Implement algorithms with Scikit-Learn.</li>
                    <li>Optimize models through feature engineering.</li>
                    <li>
                      Introduce neural networks using TensorFlow and Keras.
                    </li>
                    <li>Build and fine-tune predictive models.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0d1327] to-[#040e2c]  w-full border-white border-[1px] h-96 rounded-xl my-12 ">
              <div className="h-[30%]  border-white border-b-[1px] ">
                {" "}
                <div className="w-32 h-12 ml-12 mt-[-25px] flex justify-center items-center border-white border-[1px] rounded-lg bg-[#4169e1]">
                  <h1 className="uppercase">module 4</h1>
                </div>
                <div className="mb-10">
                  <h1 className="text-2xl font-bold">
                    Advanced Topics and Real-world Applications
                  </h1>
                </div>
              </div>
              <div className="h-[70%] flex justify-center bg-[#12182c]">
                <div className="w-10/12 m-10 mb-0">
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    Mastering Complexity: Advanced Techniques and Practical
                    Applications in Data Science
                  </h2>
                  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Dive into time series analysis.</li>
                    <li>
                      Explore Natural Language Processing (NLP) techniques.
                    </li>
                    <li>Undertake advanced data analysis and ML projects.</li>
                    <li>Understand deployment and integration strategies.</li>
                    <li>
                      Conclude with an end-to-end data science project for your
                      portfolio.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*overview end */}
          {/*Master Tools Start */}
          <div className="text-white my-12">
            <div className=" text-center text-5xl font-semibold">
              <h1>Master these tools</h1>
            </div>

            <div className="m-10 text-xl font-semibold grid grid-cols-3 grid-rows-3 gap-16 ">
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/10.webp" alt="" />
                <h1>Jupyter Notebook</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/vscode.webp" alt="" />
                <h1>VSCode</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/14.webp" alt="" />
                <h1>PowerBI</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/Icon .webp" alt="" />
                <h1>Excel</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/13.webp" alt="" />
                <h1>Numpy</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/12.webp" alt="" />
                <h1>Pandas</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/15.webp" alt="" />
                <h1>Matplotlib</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/16.webp" alt="" />
                <h1>Seaborn</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src="assets/images/17.webp" alt="" />
                <h1>scikit learn</h1>
              </div>
            </div>
          </div>
          {/*Master Tools end */}
          {/*Timeline start */}
          <div className=" p-4">
            <h2 className="text-5xl text-white font-bold text-center mb-12">
              Roadmap at Debugshala
            </h2>

            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
              {/*1st start */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative p-4 my-6   rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg text-[#0074ff] text-end font-semibold lg:text-3xl">
                    Counseling Session
                  </h3>
                  <p className="mt-2 leading-6 text-xl text-end text-white">
                    Seek guidance and advice for career development.
                  </p>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-[#0074ff] border-4 border-[#7dabe4] rounded-full top-1/2"></div>
                </div>
              </div>
              {/*end */}
              {/*2nd start */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-[#0074ff] border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-[#0074ff]  rounded-xl col-start-6 col-end-10 mr-auto">
                  <h3 className="text-lg font-semibold lg:text-3xl">
                    Admission Process
                  </h3>
                  <p className="mt-2 text-xl text-white leading-6">
                    Gain practical experience through applied learning.
                  </p>
                  <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"></span>
                </div>
              </div>
              {/*2nd end */}
              {/*3rd start */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative p-4 my-6 text-gray-800  rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg text-[#0074ff] text-end font-semibold lg:text-3xl">
                    Placement Preparation
                  </h3>
                  <p className="mt-2 text-xl text-white text-end leading-6">
                    Enhance employability skills and prepare for job
                    interviews..
                  </p>
                  <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"></span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-[#0074ff] border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>
              {/*3rd end */}
              {/*4th start */}

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-[#0074ff] border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800   col-start-6 col-end-10 ">
                  <h3 className="text-lg font-semibold text-[#0074ff] lg:text-3xl">
                    Capstone Project
                  </h3>
                  <p className="mt-2 text-xl  text-white leading-6">
                    Develop data driven solutions on real world data and
                    insights
                  </p>
                  <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"></span>
                </div>
              </div>
              {/*5th start */}
              <div className="flex md:contents flex-row-reverse">
                <div className="relative p-4 my-6   rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                  <h3 className="text-lg text-[#0074ff] text-end font-semibold lg:text-3xl">
                    Interview & Exposure
                  </h3>
                  <p className="mt-2 text-xl text-white text-end leading-6">
                    Engage in mock interviews and gain industry exposure.
                  </p>
                  <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"></span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full  rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
              </div>
              {/*5th end */}
              {/*6th start */}

              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-indigo-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-[#0074ff] border-4 border-indigo-400 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800   col-start-6 col-end-10 ">
                  <h3 className="text-lg font-semibold text-[#0074ff] lg:text-3xl">
                    Placement
                  </h3>
                  <p className="mt-2 text-xl  text-white leading-6">
                    Secure a job position aligned with career aspirations.
                  </p>
                  <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap"></span>
                </div>
              </div>
              {/*6th end */}
            </div>
          </div>
          {/*Timeline end */}
          {/* end */}
        </div>
        {/* Answers start*/}
        <div className="w-[93%] my-20 ">
          <h1 className="text-center text-white text-5xl font-bold font-IBN">
            Seeking Answers? Find Them All in Our Detailed FAQ
          </h1>
          <div className=" m-10  h-auto  flex p-10 shadow-lg shadow-white rounded-xl ">
            <div className="w-1/2 ">
              <div className="m-5">
                <div
                  id="first"
                  className="bg-[#030a21] py-5 text-white text-[16px] font-bold px-4 border-white border-[2px] rounded-lg font-extraboldbold flex items-center"
                >
                  <h1>
                    What makes Debugshalas Data Science course in Indore unique,
                    and how does Yukti by Debugshala enhance the learning
                    experience?
                  </h1>
                  <div>
                    <img
                      id="third"
                      className="w-6 h-4"
                      src="assets/images/fast-forward.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="second"
                  className="bg-[#030a21] py-5 text-white d px-4 border-white border-[2px] border-t-0 rounded-lg flex items-center "
                >
                  <h1>
                    Answer: <br />
                    Debugshalas Data Science course in Indore is distinguished
                    by its practical training, personalized mentorship, and the
                    support of the interactive developer community. Yukti by
                    Debugshala amplifies the learning experience by providing
                    AI-assisted tools that offer personalized insights, ensuring
                    a more efficient learning journey in data analytics.
                  </h1>
                </div>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="w-1/2 bg-yellow-600"></div>
          </div>
        </div>
        {/* Answers end*/}
      </div>

      <div className=" fixed bottom-0 z-100000 h-24 isolate aspect-video w-full bg-white/20 shadow-lg ring-1 ring-black/5 flex justify-end">
        <div className="w-1/3 flex h-full">
          <h1 className="text-white text-lg flex justify-center items-center">
            Book your free Demo right now!
          </h1>
          <Link to="/form"><button className="bg-blue-600 text-white text-xl m-4 font-bold w-2/5 p-1 rounded-lg hover:text-black hover:bg-blue-700">
            Enroll Now
          </button></Link>
        </div>
      </div>
    </>
  );
}

export default DataScienceCourse;
