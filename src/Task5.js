import React, { useState } from "react";

const Task5 = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    setDateOfBirth(inputDate);
  }

    const calculate=()=> {
      if (dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const today = new Date();
        const ageDiff = today - dob;
        const ageDate = new Date(ageDiff);
        const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAge(calculatedAge);
      } else {
        setAge("");
      }
    };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center shadow rounded-5 w-75 mx-auto mt-5 p-5">
        <h3 className="py-2">Age Calculator</h3>
        <h6 className="py-2">Enter your date of birth</h6>
        <div className="py-3">
          <input
            type="date"
            id="dobInput"
            value={dateOfBirth}
            onChange={handleDateChange}
            style={{width:"200px"}}
          />
        </div>
        <button className="btn btn-primary my-2" onClick={calculate}>
          Calculate Age
        </button>
        <div className="py-3" style={{height:"100px"}}>{age && <h3>Your age is {age} years.</h3>}</div>
      </div>
    </>
  );
};

export default Task5;
