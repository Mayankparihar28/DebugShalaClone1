import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/*wrapper */}
      <div className="bg-[#030a21] flex flex-col sm:flex-row justify-center  overflow-hidden">
        <div className=" w-[95%] m-10 h-auto">
          <div className="   flex flex-col sm:flex-row justify-center  ">
            <div className="w-[73%]">
              {" "}
              <div>
                <h1 className="text-[#c4c7cf] p-1.5 pl-0 font-semibold text-xl font-IBN">
                  Contact Debugshala
                </h1>
                <hr className="border-[#c1bebe] border-spacing-2" />
                <ul className="  flex flex-col sm:flex-row   text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
                  <li>
                    <span className="font-bold">Call : </span>+917693070042 |
                    +919111333207 |
                  </li>
                  <li>
                    <span className="font-bold">Mail : </span>{" "}
                    <a href="mailto: debugshala@gmail.com">
                      {" "}
                      debugshala@gmail.com |{" "}
                    </a>
                  </li>
                </ul>
                <ul className="  flex flex-col sm:flex-row   text-[#c4c7cf] font-normal ">
                  <li>
                    <span className="font-bold">Address : </span> C.S Naidu
                    Arcade, 204, Greater Kailash Road, Opposite Grotto, Old
                    Palasia, Indore, Madhya Pradesh 452001 |{" "}
                  </li>
                  <li class="snipcss0-5-6-13">
                    <a
                      href="https://g.page/r/CcsLemNK3jpGEBM/review"
                      title="Google Reviews - Debugshala"
                      class="snipcss0-6-13-14"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Leave a Review for Debugshala
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {/*Student Zone */}
                <div>
                  <h1 className="text-[#c4c7cf] p-1.5 pl-0 font-semibold text-xl font-IBN ">
                    Students Zone
                  </h1>
                  <hr className="border-[#c1bebe] border-spacing-2 gap-x-4" />
                  <ul className="  flex flex-col sm:flex-row   text-[#c4c7cf] p-1.5 pl-0 font-normal ">
                    <li>Yukti - AI Assistant |</li>
                    <li>
                      <a> Study Space - Ultimate AI Productivity Partner | </a>
                    </li>
                    <li>
                      <a> Playground - Programming Language Compilers |</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
            <div className="w-[100%] sm:w-[27%] p-2">
              {" "}
              <h1 className="text-[#c4c7cf]  font-semibold text-xl ">
                Shoot a DM at our Social Media Handles!
              </h1>
              <hr className="border-[#c1bebe] border-spacing-2" />
              <div className="pt-2   flex sm:flex-row   gap-2 ">
                <div className="w-9 h-9">
                  <img src="assets/images/facebook.png" alt="" />
                </div>
                <div className="w-9 h-9">
                  <img src="assets/images/twitter.png" alt="" />
                </div>
                <div className="w-9 h-9">
                  <img src="assets/images/youtube.png" alt="" />
                </div>
                <div className="w-9 h-9">
                  <img src="assets/images/linkedin.png" alt="" />
                </div>
                <div className="w-9 h-9">
                  <img src="assets/images/instagram.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/*Company */}
            <div>
              <h1 className="text-[#c4c7cf] p-1.5 pl-0 font-semibold text-xl font-IBN">
                Company
              </h1>
              <hr className="border-[#c1bebe] border-spacing-2" />
              <ul className="  flex flex-col sm:flex-row   text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
                <li>
                  <Link to="/about-us">About Debugshala |</Link>
                </li>
                <li>
                  <a> An Instructor | </a>
                </li>
                <li>
                  <a> Hire From Us |</a>
                </li>
                <li>Find a Job in Data Science |</li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy |</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions |</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy |</Link>
                </li>
              </ul>
            </div>
            {/*Top Placement Courses in Indore */}
            <div>
              <h1 className="text-[#c4c7cf] p-1.5 pl-0 font-semibold text-xl font-IBN">
                Top Placement Courses in Indore
              </h1>
              <hr className="border-[#c1bebe] border-spacing-2" />
              <ul className="flex flex-col sm:flex-row flex-wrap text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4 w-[95%] sm:w-auto">
                <li>
                  <Link to="/data-science-course">
                    Data Science Placement Course in Indore
                  </Link>{" "}
                  |
                </li>
                <li>
                  <Link to="/java-full-stack-course" className="flex flex-wrap">
                    Java Web Development Placement Course in Indore
                  </Link>{" "}
                  |
                </li>
                <li>
                  <Link to="/mern-stack-course">
                    MERN Stack Development Placement Course in Indore
                  </Link>{" "}
                  |
                </li>
                <li>Find a Job in Data Science |</li>
              </ul>
            </div>

            {/*Crash Courses by Debugshala in Indore */}
            <div>
              <h1 className="text-[#c4c7cf] p-1.5 pl-0 font-semibold text-xl font-IBN">
                Crash Courses by Debugshala in Indore
              </h1>
              <hr className="border-[#c1bebe] border-spacing-2" />
              <ul className="flex flex-col sm:flex-row   text-[#c4c7cf] p-1.5 pl-0 font-normal flex-wrap gap-x-4">
                <li>Cybersecurity |</li>
                <li>
                  <a> Cloud computing | </a>
                </li>
                <li>
                  <a> DevOps |</a>
                </li>
                <li> Project Management |</li>
                <li>
                  <a> Blockchain | </a>
                </li>
                <li>
                  <a> UI/UX Designing |</a>
                </li>
                <li>
                  <a> Generative AI | </a>
                </li>
                <li>
                  <a> Chatbot Development |</a>
                </li>
                <li> Linux Administrator |</li>
                <li>
                  <a> WordPress Development | </a>
                </li>
                <li>
                  <a> LinkedIn Optimisation |</a>
                </li>
              </ul>
            </div>
            <hr className="border-[#c1bebe] border-spacing-2 w-2/5 " />
          </div>
          <div className="w-[95%] sm:w-auto">
            <p className=" text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
              We have convenient location in Indore at Old Palasia. If you
              reside or seek training in any of these areas, reach out to our
              career counselors to discover the our branch for you.
            </p>
            <p className=" text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
              Adya Nagar, Airport Road, Aishbagh, Anand Nagar, Annapurna Nagar,
              Arjun Nagar, Bada Ganpati Nagar, Banganga, Bapu Nagar, Bhawarkuan,
              Bhelpur, Bhopal Road, Brahmin Colony, Chandan Nagar, Chandragupta
              Colony, Chhatripura, Civil Lines, Dev Nagar, Dhan Mandi, Dhar
              Road, Ganesh Nagar, Gopal Mandir, Gopalpura, Hanumanganj, Hira
              Nagar, Indore Cantt, Janakpuri, Jawahar Nagar, Khajrana, Kothi,
              Lalbagh, Laxmi Nagar, Malharganj, Manoramaganj, Mangalmurti Nagar,
              Mhow Road, Nehru Nagar, New Palasia, Old Palasia, Pardesipura,
              Parle Tilak Nagar, Pithampur, Rajendra Nagar, Rajgarh Road,
              Rakhial, Ratlam Road, Sanchar Nagar, Saraswati Nagar, Sarafa
              Bazar, Sayaji Nagar, Shivaji Nagar, Sneh Nagar, Subhash Nagar,
              Tilak Nagar, Trilanga, Vijay Nagar, Yashwant Nagar.
            </p>
            <p className=" text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
              We guarantee that investing an extra 15 - 20 minutes in travel
              will bring you to the premier training institute that is truly
              worth both your money and career.
            </p>

            <p className=" text-[#c4c7cf] p-1.5 pl-0 font-normal gap-x-4">
              © 2023{" "}
              <span className="underline font-bold text-[#ffcb00]">
                {" "}
                Debugshala.
              </span>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
