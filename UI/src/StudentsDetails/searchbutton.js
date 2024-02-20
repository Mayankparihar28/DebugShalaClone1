import React, { useState, useEffect } from "react";
import { _apiURLStudentFetch } from "../apiUrl";
import axios from "axios";

const StudentsDetails = () => {
  const [query, setQuery] = useState("");
  const [studentsDetails, setStudentsDetails] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const Search = () => {
    setFilteredResults(
      studentsDetails.filter((student) =>
        student.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

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
      <div className="flex justify-center w-full">
        <div className="h-auto w-[80%] text-white flex flex-col items-center gap-10">
          <label>Search students here...</label>
          <input
            placeholder="Search Students"
            className="text-[greenyellow] w-[60%] h-12 rounded-xl"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            onClick={Search}
            className="bg-pink-700 h-12 w-48 rounded-3xl hover:bg-pink-800 active:bg-pink-900"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-auto   px-4 py-2 flex flex-col items-center ">
        <table>
          {filteredResults.map((result) => (
            <tr key={result._id}>
              <th>{result.name}</th>
              <th>{result.email}</th>
              <th>{result.mobile}</th>
              <th>{result.background}</th>
            </tr>
          ))}
        </table>
      </div>
      <div className="flex justify-center">
        <div className="h-auto w-[80%] text-white  ">
          <div className="w-full h-24 flex justify-center items-center text-3xl font-bold">
            <h1>Students Details</h1>
          </div>
          <table className="w-full h-auto border border-gray-400 px-4 py-2">
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>MOBILE</th>
                <th>Background</th>
              </tr>
            </thead>
            <tbody>
              {studentsDetails.map((student, index) => (
                <tr
                  key={student._id}
                  className={
                    index % 2 === 0
                      ? "bg-blue-700 bg-opacity-50"
                      : "bg-green-700 bg-opacity-50"
                  }
                >
                  <td className="border ">{student.name}</td>
                  <td className="border ">{student.email}</td>
                  <td className="border ">{student.mobile}</td>
                  <td className="border ">{student.background}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default StudentsDetails;