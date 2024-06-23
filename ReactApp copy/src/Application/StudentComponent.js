/*
// Hobby - Additional Task
//1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
//2. Create an action to save the hobby, can use useractions file and userrouter file for the same


//Fetch the saved hobbies and show them in Login Page so that user can select any hobby and update the user info


- StudentReact > Component, Route, NavLink,Action, Reducer,

StudentName, Age, Address, etc

-StudentAPI >
StudentDataModel, Router/API/Endpoints to save and fetch students
-ExpressApp for students and do mounting
*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { SaveStudentToDB } from "../../src/store/Student/studentAction";

const Student = (props) => {
  
  let student = useSelector((store) => store.student); // reads defined data in reducer
  
  const dispatchToDB = useDispatch();

  const [stuName, setStudentName] = useState(student.student.studentName);
  const [stuAge, setStudentAge] = useState(student.student.studentAge);
  const [stuAddress, setStudentAddress] = useState(student.student.studentAddress);

  useEffect(() => {
    // Set default values for the form
    setStudentName(student.student.studentName);
    setStudentAge(student.student.studentAge);
    setStudentAddress(student.student.studentAddress);
  }, [student]);

  const saveStudentData = (evt) => {
    evt.preventDefault();

    const newStudent = {
      studentName: stuName,
      studentAge: stuAge,
      studentAddress: stuAddress,
    };

    dispatchToDB(SaveStudentToDB(newStudent));
  };

  return (
    <>
      <h1>Add Student Form</h1>
      <form className={"form col-md-10 userHook"} onSubmit={saveStudentData}>
        <label>
          <b>Student Name :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            value={stuName}
            onChange={(e) => setStudentName(e.target.value)}
          
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Age :</b>
          <input
            type="number"
            className={"form-control col-md-12"}
            value={stuAge}
            onChange={(e) => setStudentAge(e.target.value)}
            
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Address :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            value={stuAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
            placeholder="Please enter student address"
            maxLength={40}
            required
          />
        </label>
        <br></br>
        <input type="submit" className={"btn btn-primary"} value="Save" />
      </form>
    </>
  );
};

export default Student;