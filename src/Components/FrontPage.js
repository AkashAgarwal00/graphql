import React from 'react';
import { Link } from 'react-router-dom';

export default function FrontPage() {
    return (
        <div>
            <Link to='Add'> <button type="button" class="btn btn-primary"> Add </button> </Link>
            <Link to='Delete'> <button type="button" class="btn btn-primary"> Delete </button> </Link>
            <Link to='Update'> <button type="button" class="btn btn-primary"> Update </button> </Link>
            <Link to='GetData'> <button type="button" class="btn btn-primary"> Get Data </button> </Link>
        </div>
    )
}
