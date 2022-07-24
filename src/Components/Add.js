import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { createStudent } from '../graphql/mutations';
import { Amplify, API, graphqlOperation } from 'aws-amplify'

export default function Add() {
    const [name, setName] = useState("");
    const [rollno, setRollNo] = useState("");

    const eventHandler = () => {
        console.log(name, rollno);
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <h4> Roll number </h4>
                <input type="text" className="form-control" value={name} onChange={setName(name)} autoFocus autoComplete='off' aria-describedby="emailHelp" />
                <div className="form-text"></div>
            </div>
            <div className="mb-3">
                <h4> Name </h4>
                <input type="text" className="form-control" autoComplete='off' value={rollno} onChange={setRollNo(rollno)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={eventHandler}>Submit</button>
            <Link to='/'> <button type="button" class="btn btn-primary"> Go Back </button> </Link>
        </div>
    )
}
