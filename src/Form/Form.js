import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [background, setBackground] = useState();
  onsubmit = (event) => {
    event.preventDefault();
    var userDetails = {
      name: name,
      email: email,
      mobile: mobile,
      background: background,
    }
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(userDetails);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center ">
          <div className="w-4/6 h-24 flex justify-between items-center p-10 bg-blue-800">
            <h1 className=" text-2xl text-white font-bold ">Enquiry</h1>
            <Link to="/data-science-course">
              <div className=" h-10 w-10">
                <img src="assets/images/icons8-close.svg" alt="svg hai bhai" />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/6 h-auto py-24 px-10 bg-white text-black font-IBN font-bold">
            <form className="flex flex-col gap-10">
              <div>
                <label className="py-6 px-2">Full Name : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="text"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.event);
                  }}
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="py-6 px-2">Email address : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.event);
                  }}
                  placeholder="info@debugshala.com"
                />
              </div>
              <div>
                <label className="py-6 px-2">Phone number : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="tel"
                  value={mobile}
                  onChange={(event) => {
                    setMobile(event.target.event);
                  }}
                  placeholder="7693070042"
                />
              </div>
              <div>
                <label className="py-6 px-2">Background : </label>
                <br />
                <select
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  value={background}
                  onChange={(event) => {
                    setBackground(event.target.event);
                  }}
                >
                  <option className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md">
                    IT
                  </option>
                  <option className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md">
                    NON IT
                  </option>
                </select>
              </div>
              <div>
                <button
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md hover:bg-blue-700 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
