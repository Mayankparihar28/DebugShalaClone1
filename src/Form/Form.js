import { Link } from "react-router-dom";
import axios from "axios";
import { _apiURLStudent } from "../apiUrl";
import { useState } from "react";

function Form() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [background, setBackground] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    var stundentDetails = {
      name: name,
      email: email,
      mobile: mobile,
      background: background,
    };
    axios.post(_apiURLStudent , stundentDetails)
      .then((result) => {
        console.log(result);
        if (result.data.data) {
          
          setOutput("User register successfully");
          alert("Registration successfull");
        } else {
          setOutput("User registration failed");
        }
        setName("");
        setEmail("");
        setMobile("");
        setBackground("");
      });
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
            <form
              className="form flex flex-col gap-10"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label className="py-6 px-2">Full Name : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="py-6 px-2">Email address : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="email"
                  placeholder="info@debugshala.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="py-6 px-2">Phone number : </label>
                <br />
                <input
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  type="text"
                  placeholder="7693070042"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div>
                <label className="py-6 px-2">Background : </label>
                <br />
                <select
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md"
                  
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
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
                  type="submit"
                  className="w-1/2 border-solid border-black border-[0.5px] p-2 rounded-md hover:bg-blue-700 "
                >
                  Submit
                </button>
              </div>
            </form>
            <font style={{ color: "blue" }}>{output}</font>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
