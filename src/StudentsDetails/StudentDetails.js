import axios from "axios";
import { useState, useEffect } from "react";
import { _apiURLStudentFetch } from "../apiUrl";

function StudentsDetails() {
  const [studentsDetails, setStudentsDetails] = useState([]);

  useEffect(() => {
    axios
      .get(_apiURLStudentFetch)
      .then((result) => {
        setStudentsDetails(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="h-auto w-[80%] text-white  ">
          <div className="w-full h-24 flex justify-center items-center text-3xl font-bold"><h1 >Students Details</h1></div>
          <table className="w-full h-auto border border-gray-400 px-4 py-2">
            <thead>
              <tr>
                
                <th>NAME</th>
                <th>Email</th>
                <th>MOBILE</th>
                <th>Background</th>
              </tr>
            </thead>
            <tbody >
              {studentsDetails.map((student,index) => (
                <tr key={student._id} className={index % 2 === 0 ? "bg-blue-700 bg-opacity-50" : "bg-green-700 bg-opacity-50"}>
                 
                  <td className="border ">{student.name}</td>
                  <td className="border ">{student.email}</td>
                  <td className="border ">{student.mobile}</td>
                  <td className="border " >{student.background}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default StudentsDetails;
