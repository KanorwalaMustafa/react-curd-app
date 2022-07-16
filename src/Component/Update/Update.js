import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


export default function Update() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setId] = useState(null);

    const updateDataToApi = (e) => {
        e.preventDefault();
        axios.put(`https://62ce7f6e826a88972dfc9dae.mockapi.io/Crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/Read');
        })
    }

    useEffect(() => {
        setId(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, [])


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        name='fname'
                        className="form-control"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        name='lname'
                        className="form-control"
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success" onClick={updateDataToApi}>Update</button>
                <Link to='/Read'>
                    <button type="button" className="btn btn-primary m-2">Back</button>
                </Link>
            </form>


        </div>
    )
}
