import React from 'react'
import { Link } from 'react-router-dom';

export default function Delete() {
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <h4> Roll number </h4>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus autoComplete='off'/>
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <h4> Name </h4>
                    <input type="text" className="form-control" id="exampleInputPassword1" autoComplete='off'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/'> <button type="button" class="btn btn-primary"> Go Back </button> </Link>
            </form>
        </div>
    )
}
