import './App.css';
import { useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setrollNo] = useState("");

  const studentDetails = {
    id: id,
    name: name,
    rollNo: rollNo
  };

  const student = {
    name: name,
    rollNo: rollNo
  };

  const deleteStudentDetails = {
    id: id
  };

  const addStudent = async () => {
    try {
      const userData = await API.graphql({ query: mutations.createStudent, variables: { input: student } })
      console.log(userData);
      setName("");
      setrollNo("");
    } catch (err) {
      console.log('error creating student:', err)
    }
  }

  const listStudent = async () => {
    try {
      const studentData = await API.graphql(graphqlOperation(queries.listStudents))
      const student = studentData.data.listStudents.items
      console.log(student);
    } catch (err) { console.log('error fetching students') }
  }

  const updateStudent = async () => {
    try {
      const updatedStudent = await API.graphql({ query: mutations.updateStudent, variables: { input: studentDetails } });
      console.log(updatedStudent);
      setId("");
      setName("");
      setrollNo("");
    } catch (err) { console.log('error updating student') }
  }

  const deleteStudent = async () => {
    try {
      const deletedStudent = await API.graphql({ query: mutations.deleteStudent, variables: {input: deleteStudentDetails}});
      console.log(deletedStudent);
      setId("");
    } catch (err) {console.log('error deleting student')}
  }

  return (
    <>
      <div className='container'>
        <h2>Add Student</h2>
        <hr />
        <br />
        <div className="mb-3">
          <h4> Name </h4>
          <input type="text" className="form-control" value={name} onChange={(name) => setName(name.target.value)} autoComplete='off' />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <h4>Roll no</h4>
          <input type="Number" className="form-control" value={rollNo} onChange={(rollNo) => setrollNo(rollNo.target.value)} autoComplete='off' />
        </div>
        <button type="button" className="btn btn-primary my-3" onClick={addStudent}>Add Student</button>
        <br />
        <hr />
      </div>

      <div className='container'>
        <h2>List all the students</h2>
        <hr />
        <br />
        <button type="button" className="btn btn-primary my-3" onClick={listStudent}>List Student</button>
        <br />
        <hr />
      </div>

      <div className='container'>
        <h2>Update Student details</h2>
        <hr />
        <br />
        <div className="mb-3">
          <h4> Enter the ID : </h4>
          <input type="text" className="form-control" value={id} onChange={(id) => setId(id.target.value)} autoComplete='off' />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <h4> Name </h4>
          <input type="text" className="form-control" value={name} onChange={(name) => setName(name.target.value)} autoComplete='off' />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <h4> Roll No </h4>
          <input type="text" className="form-control" value={rollNo} onChange={(rollNo) => setrollNo(rollNo.target.value)} autoComplete='off' />
          <div className="form-text"></div>
        </div>
        <button type="button" className="btn btn-primary my-3" onClick={updateStudent}>Update Student</button>
        <br />
        <hr />
      </div>

      <div className="container">
        <h2>Delete Student data</h2>
        <hr />
        <br />
        <div className="mb-3">
          <h4> Enter the ID : </h4>
          <input type="text" className="form-control" value={id} onChange={(id) => setId(id.target.value)} autoComplete='off' />
          <div className="form-text"></div>
          <button type="button" className="btn btn-primary my-3" onClick={deleteStudent}> Delete </button>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
}

export default withAuthenticator(App);
