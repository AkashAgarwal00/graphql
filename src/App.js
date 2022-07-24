import './App.css';
import FrontPage from "./Components/FrontPage";
import Add from "./Components/Add";
import Delete from './Components/Delete';
import Update from './Components/Update';
import GetData from './Components/GetData';
import { useState } from 'react';
import { createStudent } from './graphql/mutations';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import * as mutations from './graphql/mutations';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';

function App() {
  const [name, setName] = useState("");
  const [rollno, setRollNo] = useState("");

  const student = {
    name: name,
    rollno: rollno
  }

  const eventHandler = async () => {
    try {
      const userData = await API.graphql({query:mutations.createStudent, variables:{input:student}})
      console.log(userData);
    } catch (err) {
      console.log('error creating student:', err)
    }
  }

  return (
    <>
      <div className="App container">
        {/* <Router>
          <Routes>
            <Route exact path='/' element={<FrontPage />}></Route>
            <Route exact path='Add' element={<Add />}></Route>
            <Route exact path='Delete' element={<Delete />}></Route>
            <Route exact path='Update' element={<Update />}></Route>
            <Route exact path='GetData' element={<GetData />}></Route>
          </Routes>
        </Router> */}
      </div>
      <div className='container'>
        <div className="mb-3">
          <h4> Roll number </h4>
          <input type="text" className="form-control" onChange={(name) => setName(name.target.value)}  autoFocus autoComplete='off' aria-describedby="emailHelp" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <h4> Name </h4>
          <input type="text" className="form-control" autoComplete='off' onChange={(rollno) => setRollNo(rollno.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={eventHandler}>Submit</button>
        {/* <Link to='/'> <button type="button" class="btn btn-primary"> Go Back </button> </Link> */}
      </div>
    </>
  );
}

export default App;
